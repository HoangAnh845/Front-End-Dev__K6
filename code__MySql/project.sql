create database library;

select * from readers;

drop table posts; -- xóa bảng

-- 1, Bảng đọc giả:
create table library.readers(
   readers_id int auto_increment, --
   username varchar(50),
   password varchar(20),
   email varchar(100), 
   fullName varchar(50), 
   birthday date, 
   sex varchar(5) , 
   -- ebook_id int,  
   -- news_id int,
   primary key(readers_id)
   -- FOREIGN KEY(ebook_id) REFERENCES library.ebook(ebook_id) ON DELETE SET NULL,
   -- FOREIGN KEY(news_id) REFERENCES library.news(news_id) ON DELETE SET NULL
);

-- 2, Bảng sách điện tử:
create table library.ebook(
   ebook_id int , 
   ebook_name varchar(20),
   ebook_like int,
   ebook_describe varchar(100),
   ebook_detail varchar(500),
   img_id int,
   publisher_id int,
   author_id int,
   download_id int, 
   category_id int,
   primary key(ebook_id)
);

describe library.ebook;

-- 3, Bảng ảnh đại diện sách
create table library.img(
   img_id int , 
   img_fullname varchar(20),
   img_describe varchar(30),
   ebook_id int,
   primary key(img_id),
   FOREIGN KEY(ebook_id) REFERENCES library.ebook(ebook_id) ON DELETE SET NULL
);

-- 4, Bảng nhà xuất bản: publisher_id, publisher_name, publisher_address, publisher_date, ebook_id, author_id
create table library.publisher(
   publisher_id int primary key, 
   publisher_name varchar(20),
   publisher_date date,
   publisher_address varchar(30),
   author_id int,
   ebook_id int,
   FOREIGN KEY(ebook_id) REFERENCES library.ebook(ebook_id) ON DELETE SET NULL
);

-- 5, Bảng tác giả:
create table library.author(
   author_id int primary key, 
   author_name varchar(20),
   author_birthday date,
   author_country varchar(30),
   publisher_id int,
   ebook_id int,
   FOREIGN KEY(publisher_id) REFERENCES library.publisher(publisher_id) ON DELETE SET NULL,
   FOREIGN KEY(ebook_id) REFERENCES library.ebook(ebook_id) ON DELETE SET NULL
);

-- 6, Bảng tải sách: 
create table library.download(
   download_id int primary key, 
   download_date date,
   ebook_id int,
   FOREIGN KEY(ebook_id) REFERENCES library.ebook(ebook_id) ON DELETE SET NULL
);

-- 7, Bảng thể loại sách điện tử: 
create table library.category(
   category_id int primary key, 
   categoryr_name varchar(20),
   author_id int,
   ebook_id int,
   FOREIGN KEY(author_id) REFERENCES library.author(author_id) ON DELETE SET NULL,
   FOREIGN KEY(ebook_id) REFERENCES library.ebook(ebook_id) ON DELETE SET NULL
);

-- 8, Bảng tin tức: 
create table library.news(
   news_id int primary key, 
   news_name varchar(50),
   news_describe varchar(200)
);

-- 9, Bảng tủ sách của tôi:
create table library.bookcase(
   bookcase_id int primary key, 
   readers_id int, 
   ebook_id int,
   FOREIGN KEY(readers_id) REFERENCES library.readers(readers_id) ON DELETE SET NULL,
   FOREIGN KEY(ebook_id) REFERENCES library.ebook(ebook_id) ON DELETE SET NULL
);

-- 10, Bảng thông báo:  
create table library.notification(
   notification_id int primary key, 
   notification_name varchar(50), 
   notification_describe varchar(100), 
   readers_id int,
   FOREIGN KEY(readers_id) REFERENCES library.readers(readers_id) ON DELETE SET NULL
);

-- 8, Bảng thành viên: member_id,  member_img, member_notification, member_phone, ebook_id, readers_id, download _id, bookcase _id
-- create table library.member(
--    member_id int primary key,
--    member_img text, 
--    member_phone varchar(20),
--    ebook_id int,
--    readers_id int,
--    download_id int,
--    bookcase_id int,
--    member_notification int,
--    FOREIGN KEY(ebook_id) REFERENCES library.ebook(ebook_id) ON DELETE SET NULL,
--    FOREIGN KEY(readers_id) REFERENCES library.readers(readers_id) ON DELETE SET NULL,
--    FOREIGN KEY(download_id) REFERENCES library.download(download_id) ON DELETE SET NULL
-- );



-- Bảng mối quan hệ sáng tác: composed_id, author_id, ebook_id, publisher_id
create table library.composed(
   composed_id int primary key, 
   author_id int, 
   ebook_id int, 
   publisher_id int,
   FOREIGN KEY(author_id) REFERENCES library.author(author_id) ON DELETE SET NULL,
   FOREIGN KEY(ebook_id) REFERENCES library.ebook(ebook_id) ON DELETE SET NULL,
   FOREIGN KEY(publisher_id) REFERENCES library.publisher(publisher_id) ON DELETE SET NULL
);

-- Bảng mối quan hệ xuất bản: publish _id, publisher_id, ebook_id
create table library.publish(
   publish_id int primary key, 
   publisher_id int, 
   ebook_id int, 
   FOREIGN KEY(publisher_id) REFERENCES library.publisher(publisher_id) ON DELETE SET NULL,
   FOREIGN KEY(ebook_id) REFERENCES library.ebook(ebook_id) ON DELETE SET NULL
);

-- Bảng mối quan hệ đọc sách: rebok_id, member_id, ebook_id
create table library.rebok(
   rebok_id int primary key, 
   member_id int, 
   ebook_id int, 
   FOREIGN KEY(member_id) REFERENCES library.member(member_id) ON DELETE SET NULL,
   FOREIGN KEY(ebook_id) REFERENCES library.ebook(ebook_id) ON DELETE SET NULL
);

-- Bảng đăng nhập: login_id, readers _id, member_id
create table library.login(
   login_id int primary key, 
   member_id int, 
   readers_id int, 
   FOREIGN KEY(member_id) REFERENCES library.member(member_id) ON DELETE SET NULL,
   FOREIGN KEY(readers_id) REFERENCES library.readers(readers_id) ON DELETE SET NULL
);



-- Thêm một khóa ngoại cho bảng
alter table library.member
add foreign key(notification_id)
references library.notification(notification_id) on delete set null;
-- -------------------------------------------------------------------------------------
describe library.composed; -- Phương thức trả về mô tả dữ liệu trong DataFrame
alter table library.publisher add ebook_id int; -- Câu lệnh được sử dụng để thêm các cột trong bảng hiện có
select * from library.readers; -- Xem bảng
drop table library.bookcase; -- Xóa bảng 
ALTER TABLE library.member
add notification_id int; -- xóa cột
