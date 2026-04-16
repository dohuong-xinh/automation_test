1. Phạm vi biến (Scope)
Block scope: { }
let, const → chỉ dùng trong block
var → không bị giới hạn block
Global scope: biến khai báo ngoài hàm
let/const → an toàn hơn var
2. break & continue
break → thoát vòng lặp ngay lập tức
continue → bỏ qua lần lặp hiện tại
Dùng khi:
break → khi tìm thấy kết quả
continue → bỏ qua case không hợp lệ
3. Câu điều kiện
if...else
if (condition) { } else { }
else if (nhiều điều kiện)
if (...) { }
else if (...) { }
else { }
Ternary (viết ngắn)
condition ? A : B
4. Vòng lặp nâng cao
for...in
for (let key in obj)
forEach
Duyệt array
không dùng break/continue
Utils function
String utils
trim() → xóa khoảng trắng
toLowerCase() / toUpperCase()
includes() → kiểm tra chứa
split() → cắt chuỗi
replace() → thay thế
Array utils
Thêm:
push() (cuối)
unshift() (đầu)
splice() (giữa)
Xóa:
pop(), shift(), splice()
Tìm:
find(), filter()
Biến đổi:
map()
Sắp xếp:
sort()