SELECT Fullname, Dno,ssn,Num_of_emp FROM
(SELECT CONCAT(Fname," ",Lname) As Fullname,Dno,ssn FROM 
EMPLOYEE INNER JOIN DEPARTMENT ON EMPLOYEE.Dno= DEPARTMENT.Dnumber WHERE
 Ssn IN (SELECT DISTINCT Super_ssn FROM EMPLOYEE WHERE Super_ssn IS NOT NULL)) AS A
 INNER JOIN (select super_ssn ,count(*) As Num_of_emp from EMPLOYEE where super_ssn is NOT NULL group by super_ssn)
AS B ON A.ssn=B.Super_ssn ;
