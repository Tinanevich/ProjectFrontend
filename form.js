var formElement=document.forms.INFO;
formElement.onsubmit=validateInfoForm;
            
function validateInfoForm() {
    var nameElement=formElement.elements.NAME;
    var numberElement=formElement.elements.NUMBER;
            
    var nameValue=nameElement.value;
    var numberValue=parseInt(numberElement.value.trim());
    var numberValue=numberElement.value;
        if ( nameValue.length>15 ) {
        alert('Введите, пожалуйста, имя не длиннее 15 символов!');
        nameElement.focus();
        return false;
        }
        if ( isNaN(numberValue) ) {
            alert('Введите, пожалуйста, в поле цифры!');
            numberElement.focus();
            return false;
        }

        if ( numberValue.length>12 ) {
            alert('Введите, пожалуйста, номер не длиннее 12 символов!');
            numberElement.focus();
            return false;
            }
        
        return true; // (alert('Ваша заявка принята! В ближайшее время с вами свяжутся!'))
                }  
                
