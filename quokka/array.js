const alist = ["dave", "avi", "gali"];
alist;
const member = alist[1];
member;

const alist2 = [...alist, "vered"];
alist2;

const param = "pupi";
const alist3 = [...alist2, param];
alist3;

const obj1 = { myname: "Doron", age: 48 };
const myname = obj1.myname;
myname;
const age = obj1["age"];
age;

const path1 = "age";
const newage = obj1[path1];
newage;

const printAge = ({ age }) => {
    return age;
};

const a = printAge(obj1);
a;
