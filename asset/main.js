function Lay_gia_tri_cu(){
    return document.getElementById("gia_tri_cu").innerText;
}
function In_gia_tri_cu(so){
    return document.getElementById("gia_tri_cu").innerText=so;
}
function Lay_ket_qua(){
    return document.getElementById("gia_tri_xuat").innerText;
}
function In_ket_qua(so){
   if(so == ""){
       document.getElementById("gia_tri_xuat").innerText=so;
   }else{
       document.getElementById("gia_tri_xuat").innerText=Dinh_dang_chuoi(so);
   }
}
// Dinh dang chuoi
function Dinh_dang_chuoi(so){
    var n = Number(so);
    var gia_tri = n.toLocaleString("en");
    return gia_tri;
}
// chuyen dinh dang tu chuoi sang so
function Xoa_Dinh_dang_chuoi(so) {
    return Number(so.replace(/,/g, ''))
}
// add sự kiện click vào các button con số và hiển thị lên màn hình
var con_so = document.getElementsByClassName("con_so");
    for(var i=0; i<con_so.length; i++){
        con_so[i].addEventListener('click',function(){
            var ket_qua = Xoa_Dinh_dang_chuoi(Lay_ket_qua());
            if(ket_qua!= NaN){
                ket_qua = ket_qua + this.id;
                In_ket_qua(ket_qua);
            }
        })
    }
// add sự kiện click vào button xóa tất cả 
var he_thong = document.getElementsByClassName("he_thong");
    for(var i=0; i<he_thong.length; i++){
        he_thong[i].addEventListener('click',function(){
            if(this.id == "xoa_tat_ca"){
                In_ket_qua("");
                In_gia_tri_cu("");
            }else if(this.id == "xoa_tung_so"){
                let ket_qua = Xoa_Dinh_dang_chuoi(Lay_ket_qua()).toString();
                if(ket_qua){
                    ket_qua = ket_qua.substr(0,ket_qua.length-1);
                    In_ket_qua(ket_qua);
                }
            }else{
                var ket_qua =Lay_ket_qua();
                var ket_qua_cu = Lay_gia_tri_cu();
                if(ket_qua != ""){
                    ket_qua = Xoa_Dinh_dang_chuoi(ket_qua);
                    ket_qua_cu = ket_qua_cu + ket_qua;
                    if(this.id == "="){
                        var ket_qua_cuoi = eval(ket_qua_cu);
                        In_ket_qua(ket_qua_cuoi);
                        In_gia_tri_cu("");
                    }else{
                        ket_qua_cu = ket_qua_cu + this.id;
                        In_gia_tri_cu(ket_qua_cu);
                        In_ket_qua("");
                    }
                }
            }
        })
    }