let input = document.getElementById('input');
    let list = document.getElementById('list');
    let errorText = document.getElementById('errorText');
    let i = 1;
    function fillterText(text) {
        if(text) {
            if(text.length > 1){
                return text;
        }else {
            errorText.innerHTML = 'Tulis Setidaknya 1 Karakter';
            return false;
        }
    }
    errorText.innerHTML = 'Input Tidak Boleh Kosong !';
    return false;
}
    function showList(input) {
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date+' '+time;
        list.innerHTML+= `<li class="list-item" id='list${i}'>
                                <div id="listText">
                                    <span id="listText${i}">${input}</span>
                                    <p id="dateText">${dateTime}</p>
                                </div>

                                <div id="actionBtn">
                                    <i class="fas fa-trash text danger" onclick="deleteList(${i})"></i>
                                </div>
                            </li>
        `;
        i++;
    }

    function deleteList(listId) {
        
        let currentText = document.getElementById('listText${listId}').innerHTML;
            let deleteList = document.getElementById('list'+listId);
            list.removeChild(deleteList);
    }

    function addList() {
        let inputText = input.value;
        if(fillterText(inputText)){
            showList(fillterText(inputText));

            input.value = '';
            errorText.innerHTML = '';
        }
    }