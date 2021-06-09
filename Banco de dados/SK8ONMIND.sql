create database SK8ONMIND;

create table cadastro(
idUsuario int primary key auto_increment,
NomeCompleto varchar(45),
Email varchar(45),
NomeUsuario varchar(30),
Senha varchar(20));

select * from cadastro;


create table progresso(
id int primary key auto_increment,
NomeManobra varchar(45),
dataManobra date,
fkUsuario int);

    alter table progresso add foreign key(fkUsuario) references cadastro(idUsuario);
    
   
    

