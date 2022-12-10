CREATE DATABASE testDB;
-- CREATE DATABASE lệnh được sử dụng để tạo cơ sở dữ liệu SQL mới.
-- CREATE TABLE lệnh được sử dụng để tạo một bảng mới trong cơ sở dữ liệu.
CREATE TABLE testDB.student (
    student_id int auto_increment, -- Cho phép các số nguyên từ -2.147.483.648 đến 2.147.483.647
    name varchar(20) , -- Chuỗi ký tự có độ rộng thay đổi 
    major varchar(25), 
    primary key(student_id) -- ràng buộc xác định duy nhất mỗi bản khóa chính ghi trong một bảng 
	-- NULL: là trường không có giá trị
    -- NOT NULL: biểu thị rằng cột phải luôn chấp nhận một giá trị rõ ràng của kiểu dữ liệu đã cho
    -- UNIQUE: Ràng buộc đảm bảo rằng tất cả các giá trị trong một cột là khác nhau
    -- Default: Ràng buộc được sử dụng để đặt giá trị mặc định cho một cột.
    -- AUTO_INCREMENT: Tự động tăng cho phép một số duy nhất được tạo tự động khi một bản ghi mới được chèn vào bảng.
);
describe testDB.student; -- Phương thức trả về mô tả dữ liệu trong DataFrame
drop table testdb.student; -- Phương thức xóa một bảng
alter table testdb.student add gpa decimal(3,2); -- Câu lệnh được sử dụng để thêm các cột trong bảng hiện có
-- Kiểu dữ liệu decimal(n,m):số thập phân
-- n: cho biết tổng số chữ số tối đa có thể được lưu trữ (cả bên trái và bên phải của dấu thập phân)
-- m: cho biết số lượng chữ số tối đa được lưu trữ ở bên phải của dấu thập phân.
alter table testdb.student drop column gpa; -- Câu lệnh được sử dụng để xóa các cột trong bảng hiện có

--                                   Chèn dữ liệu vào bảng
-- Cách 1: Chỉ định cả tên cột và giá trị sẽ được chèn
-- insert into testdb.student (student_id, name, major) values(1,'Jack','Biology');
-- sử dụng AUTO_INCREMENT để tự động thêm id khi thêm trường mới dữ liệu vào bảng
insert into testdb.student (name, major) values('Jack','Biology');
insert into testdb.student (name, major) values('Kate','Sociology');
insert into testdb.student (name, major) values('Claire','Chemistry');
insert into testdb.student (name, major) values('Jack','Biology');
insert into testdb.student (name, major) values('Mike','Computer Science');
insert into testdb.student (name) values('Landa');
-- Cách 2: Không cần chỉ định tên cột trong truy vấn SQL, hãy đảm bảo thứ tự của các giá trị theo thứ tự với các cột trong bảng
-- insert into testdb.student values(1,'Jack','Biology'); -- Câu lệnh được sử dụng để chèn các dữ liệu mới trong một bảng.

select * from testdb.student; -- trích xuất tất cả dữ liệu từ cơ sở dữ liệu với dấu "*" 
--                                     Cập nhật dữ liệu trong bảng
UPDATE testdb.student -- Câu lệnh được sử dụng để sửa đổi các bản ghi hiện có trong một bảng.
SET name = 'Line', major='aui' -- Xác định dữ liệu cần cập nhật
WHERE student_id = 6 ; -- Mệnh đề chỉ định (các) bản ghi nào cần được cập nhật. Nếu bạn bỏ qua WHERE mệnh đề, tất cả các bản ghi trong bảng sẽ được cập nhật!
--                                      Xóa dữ liệu trong bảng
delete from testdb.student -- Câu lệnh được sử dụng để xóa các bản ghi hiện có trong một bảng.
where student_id = 6; -- xóa một hàng với id cột bằng 6
delete from testdb.student; -- Xóa tất cả hàng trong bảng
--                                      Truy vấn cơ bản
-- SELECT câu lệnh được sử dụng để chọn dữ liệu từ cơ sở dữ liệu.
select name,major from testdb.student; -- trích xuất dữ liệu từ cơ sở dữ liệu với với hai cột name and major
select student_id,name,major from testdb.student order by name;
-- Từ ORDER BY khóa sắp xếp các bản ghi theo thứ tự tăng dần theo mặc định. 
-- Để sắp xếp các bản ghi theo thứ tự giảm dần, hãy sử dụng DESC từ khóa.
-- Lệnh ASC được sử dụng để sắp xếp dữ liệu trả về theo thứ tự tăng dần.
select * from testdb.student limit 2;
-- Mệnh LIMIT đề được sử dụng để chỉ định số lượng bản ghi cần trả về.