function display_sec(val){
   
    document.getElementById('text_sec').value= document.getElementById('text_sec').value+val

}
function display_sec_clear(){
    document.getElementById('text_sec').value=" "
}
function  display_sec_equal(){
    var s= document.getElementById('text_sec').value
   var result= eval(s)
   document.getElementById('text_sec').value = result
    
}