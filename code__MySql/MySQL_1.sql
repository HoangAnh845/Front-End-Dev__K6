create database sql_store;
-- Bảng nhân viên
CREATE TABLE sql_store.employee (
  emp_id INT PRIMARY KEY,
  first_name VARCHAR(40),
  last_name VARCHAR(40),
  birth_day DATE, -- Kiểu dữ liệu ngày tháng 
  sex VARCHAR(1),
  salary INT,
  super_id INT,
  branch_id INT
);

-- Bảng chi nhánh
CREATE TABLE sql_store.branch (
  branch_id INT PRIMARY KEY,
  branch_name VARCHAR(40),
  mgr_id INT,
  mgr_start_date DATE,
  FOREIGN KEY(mgr_id) REFERENCES sql_store.employee(emp_id) ON DELETE SET NULL
  -- FOREIGN KEY buộc ngăn không cho dữ liệu không hợp lệ được chèn vào cột khóa ngoại, vì nó phải là một trong những giá trị có trong bảng mẹ.
  -- REFERENCES tham chiếu tới bảng cần dùng
  -- ON DELETE SET NULL: nếu một bản ghi trong bảng mẹ bị xóa, thì các bản ghi tương ứng trong bảng con sẽ có các trường khóa ngoại được đặt thành NULL. Các bản ghi trong bảng con sẽ không bị xóa trong SQL Server.
);

select * from sql_store.employee;
-- Thêm khóa ngoại cho cột branch_id và super_id ở bảng nhân viên
alter table sql_store.employee -- Thêm ràng buộc vào bảng nhân sự
add foreign key(branch_id) -- thêm khóa ngoại vào cột branch_id trong bảng
references sql_store.branch(branch_id) on delete set null; -- tham chiếu tới bảng chi nhánh có cũng tên để lấy giá trị 

alter table sql_store.employee
add foreign key(super_id)
references sql_store.employee(emp_id) on delete set null;

-- Bảng khách hàng
CREATE TABLE sql_store.client (
  client_id INT PRIMARY KEY,
  client_name VARCHAR(40),
  branch_id INT,
  FOREIGN KEY(branch_id) REFERENCES sql_store.branch(branch_id) ON DELETE SET NULL
);

-- works_with
CREATE TABLE sql_store.works_with (
  emp_id INT,
  client_id INT,
  total_sales INT,
  PRIMARY KEY(emp_id, client_id),
  FOREIGN KEY(emp_id) REFERENCES sql_store.employee(emp_id) ON DELETE CASCADE,
  FOREIGN KEY(client_id) REFERENCES sql_store.client(client_id) ON DELETE CASCADE
  -- ON DELETE CASCADE: để tự động xóa các hàng khỏi bảng con, khi các hàng từ bảng mẹ bị xóa
);

CREATE TABLE sql_store.branch_supplier (
  branch_id INT,
  supplier_name VARCHAR(40),
  supply_type VARCHAR(40),
  PRIMARY KEY(branch_id, supplier_name),
  FOREIGN KEY(branch_id) REFERENCES sql_store.branch(branch_id) ON DELETE CASCADE
);

--                                          Chèn dữ liệu 
-- Corporate
INSERT INTO sql_store.employee VALUES(100, 'David', 'Wallace', '1967-11-17', 'M', 250000, NULL, NULL);
INSERT INTO sql_store.branch VALUES(1, 'Corporate', 100, '2006-02-09');

UPDATE sql_store.employee
SET branch_id = 1
WHERE emp_id = 100;
INSERT INTO sql_store.employee VALUES(101, 'Jan', 'Levinson', '1961-05-11', 'F', 110000, 100, 1);

-- Scranton
INSERT INTO sql_store.employee VALUES(102, 'Michael', 'Scott', '1964-03-15', 'M', 75000, 100, NULL);
INSERT INTO sql_store.branch VALUES(2, 'Scranton', 102, '1992-04-06');

UPDATE sql_store.employee
SET branch_id = 2
WHERE emp_id = 102;
INSERT INTO sql_store.employee VALUES(103, 'Angela', 'Martin', '1971-06-25', 'F', 63000, 102, 2);
INSERT INTO sql_store.employee VALUES(104, 'Kelly', 'Kapoor', '1980-02-05', 'F', 55000, 102, 2);
INSERT INTO sql_store.employee VALUES(105, 'Stanley', 'Hudson', '1958-02-19', 'M', 69000, 102, 2);

-- Stamford
INSERT INTO sql_store.employee VALUES(106, 'Josh', 'Porter', '1969-09-05', 'M', 78000, 100, NULL);
INSERT INTO sql_store.branch VALUES(3, 'Stamford', 106, '1998-02-13');

UPDATE sql_store.employee
SET branch_id = 3
WHERE emp_id = 106;
INSERT INTO sql_store.employee VALUES(107, 'Andy', 'Bernard', '1973-07-22', 'M', 65000, 106, 3);
INSERT INTO sql_store.employee VALUES(108, 'Jim', 'Halpert', '1978-10-01', 'M', 71000, 106, 3);

-- BRANCH SUPPLIER
INSERT INTO sql_store.branch_supplier VALUES(2, 'Hammer Mill', 'Paper');
INSERT INTO sql_store.branch_supplier VALUES(2, 'Uni-ball', 'Writing Utensils');
INSERT INTO sql_store.branch_supplier VALUES(3, 'Patriot Paper', 'Paper');
INSERT INTO sql_store.branch_supplier VALUES(2, 'J.T. Forms & Labels', 'Custom Forms');
INSERT INTO sql_store.branch_supplier VALUES(3, 'Uni-ball', 'Writing Utensils');
INSERT INTO sql_store.branch_supplier VALUES(3, 'Hammer Mill', 'Paper');
INSERT INTO sql_store.branch_supplier VALUES(3, 'Stamford Lables', 'Custom Forms');

-- CLIENT
INSERT INTO sql_store.client VALUES(400, 'Dunmore Highschool', 2);
INSERT INTO sql_store.client VALUES(401, 'Lackawana Country', 2);
INSERT INTO sql_store.client VALUES(402, 'FedEx', 3);
INSERT INTO sql_store.client VALUES(403, 'John Daly Law, LLC', 3);
INSERT INTO sql_store.client VALUES(404, 'Scranton Whitepages', 2);
INSERT INTO sql_store.client VALUES(405, 'Times Newspaper', 3);
INSERT INTO sql_store.client VALUES(406, 'FedEx', 2);

-- WORKS_WITH
INSERT INTO sql_store.works_with VALUES(105, 400, 55000);
INSERT INTO sql_store.works_with VALUES(102, 401, 267000);
INSERT INTO sql_store.works_with VALUES(108, 402, 22500);
INSERT INTO sql_store.works_with VALUES(107, 403, 5000);
INSERT INTO sql_store.works_with VALUES(108, 403, 12000);
INSERT INTO sql_store.works_with VALUES(105, 404, 33000);
INSERT INTO sql_store.works_with VALUES(107, 405, 26000);
INSERT INTO sql_store.works_with VALUES(102, 406, 15000);
INSERT INTO sql_store.works_with VALUES(105, 406, 130000);

--                              Truy vấn cơ bản SQL
-- Nhiệm vụ thứ 1: Tìm tất cả tên nhân viên từ bảng nhân viên
select first_name,last_name from sql_store.employee;
-- Nhiệm vụ thứ 2: Tìm và sắp xếp lương theo chiều giảm dần
select first_name,salary from sql_store.employee order by salary desc; 
-- Nhiệm vụ thứ 3: Tìm và sắp xếp nhân viên theo giới tính
select first_name,sex from sql_store.employee order by sex,first_name; 
-- Nhiệm vụ thứ 4: Tìm và 3 nhân viên có mức lương cao nhất 
select first_name, salary from sql_store.employee order by salary desc limit 3;
-- Nhiệm vụ thứ 5: Tìm và đặt tên cột "first_name" thành "forename", "last_name" thành "surname"
-- Lệnh AS được sử dụng để đổi tên cột hoặc bảng với bí danh.
select first_name as forename, last_name as surname from sql_store.employee;
-- Nhiệm vụ thứ 6: Tìm tất cả các giá trị khác nhau ở cột giới tính bảng nhân viên 
-- Câu SELECT DISTINCT lệnh chỉ được sử dụng để trả về các giá trị riêng biệt (khác nhau).
select distinct sex from sql_store.employee;

--                               Chức năng SQL
-- Nhiệm vụ 1: Có bao nhiều id nhân viên trong bảng nhân viên?
-- Hàm COUNT() trả về số hàng phù hợp với một tiêu chí được chỉ định.
select count(emp_id) from sql_store.employee;
-- Nhiệm vụ 2: Tìm và đếm số nhân viên nữ sinh sau năm 1970
select count(emp_id ) from sql_store.employee
where sex = "F" and birth_day > '1970-1-1';
-- Nhiệm vụ 3: Tìm mức trung bình của tất cả tiền lương của nhân viên
-- Hàm AVG() trả về giá trị trung bình của một cột số. 
select avg(salary) as average from sql_store.employee;
-- Nhiệm vụ 4: Tìm tổng số tiền lương của nhân viên
-- Hàm SUM() trả về tổng cộng của một cột số. 
select sum(salary) as sum from sql_store.employee;
-- Nhiệm vụ 5: Tìm và hiển thị tổng số nam và nữ hiện có trong bảng nhân viên
select count(sex), sex from sql_store.employee group by sex; 
-- Nhiệm vụ 6: Tìm tổng doanh thu của mỗi nhân viên bán được ở bảng works_with 
select emp_id ,sum(total_sales) as total_sales from sql_store.works_with group by emp_id;
-- Nhiệm vụ 7: Tìm và hiện thị mỗi khách hàng chi bao nhiêu tiền cho chi nhánh
select client_id, sum(total_sales) from sql_store.works_with group by client_id;

--                               Kí tự đai diện SQL
-- Nhiệm vụ 1: Tìm khách hàng nào là một LLC
-- Toán tử LIKE được sử dụng trong một WHERE mệnh đề để tìm kiếm một mẫu xác định trong một cột.
-- Dấu phần trăm (%) đại diện cho không, một hoặc nhiều ký tự
-- Dấu gạch dưới (_) đại diện cho một, một ký tự
select * from sql_store.client where client_name like "%LLC"; -- Tên khách hàng kết thúc bằng "LLC"
-- Nhiệm vụ 2: Tìm bất kỳ nhà cung cấp chi nhanh nào đang kinh doanh nhãn
select * from sql_store.branch_supplier where supplier_name like "%Labels%"; -- Tìm bất kỳ giá trị nào có "hoặc" ở bất kỳ vị trí nào
-- Nhiệm vụ 3: Tìm bất kỳ nhân viên nào sinh vào tháng 10
select * from sql_store.employee where birth_day like "____-10%"; -- Định dạng date sẽ 4 ký tự đầu là năm sau có dấu gạch ngang và 2 ký tự là tháng 
-- Nhiệm vụ 4: Tìm bất kỳ khách hàng nào có tên chứa "school"
select * from sql_store.client where client_name like "%school";

--                               Union SQL
-- Toán tử UNION được sử dụng để kết hợp tập kết quả của hai hoặc nhiều SELECT câu lệnh.
-- Mọi SELECT câu lệnh bên trong UNION phải có cùng số cột
-- Các cột cũng phải có kiểu dữ liệu tương tự
-- Các cột trong mọi SELECTcâu lệnh cũng phải theo cùng một thứ tự
-- Nhiệm vụ 1: Tìm danh sách tên nhân viên và tên chi nhánh 
select first_name as Company_Names from sql_store.employee
union 
select branch_name from sql_store.branch;
-- Nhiệm vụ 2: Tìm danh sách tất cả tên khách hàng và tên nhà cung cấp 
select client_name, branch_id from sql_store.client
union
select supplier_name, branch_id from sql_store.branch_supplier ;
-- Nhiệm vụ 3: Tìm một danh sách tất cả số tiền mà công ty đã chi trả cho nhân viên và kiếm được tiền từ việc bán hàng 
select salary as chiThu, emp_id from sql_store.employee
union
select total_sales, emp_id from sql_store.works_with;

--                               Joins SQL
-- (INNER) JOIN: Trả về các bản ghi có giá trị phù hợp trong cả hai bảng
-- FULL (OUTER) JOIN: Trả về tất cả các bản ghi khi có một kết quả phù hợp trong bảng bên trái hoặc bên phải
insert into sql_store.branch values(4,'Buffalo',null,null);
-- Nhiệm vụ 1: Tìm tất cả tên chinh nhánh và tên những người quản lý
-- Một JOIN mệnh đề được sử dụng để kết hợp các hàng từ hai hoặc nhiều bảng, dựa trên một cột có liên quan giữa chúng.
select employee.emp_id, employee.first_name , branch.branch_name
from sql_store.employee
join sql_store.branch on employee.emp_id = branch.mgr_id;
-- LEFT (OUTER) JOIN: Trả về tất cả các bản ghi từ bảng bên trái và các bản ghi phù hợp từ bảng bên phải
-- RIGHT (OUTER) JOIN: Trả về tất cả các bản ghi từ bảng bên phải và các bản ghi phù hợp từ bảng bên trái
select employee.emp_id, employee.first_name , branch.branch_name
from sql_store.employee
left join sql_store.branch on employee.emp_id = branch.mgr_id;

--                               Nested Queries SQL
-- Truy vấn lồng nhau về cơ bản là một truy vấn mà sử dụng nhiều câu lệnh chọn để có một phần thông tin cụ thể 
-- Nhiệm vụ 1: Tìm tất cả tên nhân viên đã bán được hơn 30.000 đô cho một khách hàng 
select employee.first_name, employee.last_name 
from sql_store.employee 
where employee.emp_id in(
  select works_with.emp_id
  from sql_store.works_with 
  where works_with.total_sales > 30000
); 

-- Nhiệm vụ 2: Tìm tất cả khách hàng được quản lý bởi chi nhánh mà Micheal Scott quản lý 
-- Tìm chi nhánh mà Micheal Scott quản lý 
select client.client_name from sql_store.client 
where branch_id = (
   select branch.branch_id from sql_store.branch 
   where branch.mgr_id = 102
) ;

--                               On Delete SQL
-- Xóa các mục trong csdl khi chúng có các khóa ngoại được liên kết 
-- ON DELETE SET NULL: nếu một bản ghi trong bảng mẹ bị xóa, thì các bản ghi tương ứng trong bảng con sẽ có các trường khóa ngoại được đặt thành NULL. Các bản ghi trong bảng con sẽ không bị xóa trong SQL Server.
-- ON DELETE CASCADE: để tự động xóa các hàng khỏi bảng con, khi các hàng từ bảng mẹ bị xóa
delete from sql_store.employee where emp_id = 102; 
select * from sql_store.branch ;