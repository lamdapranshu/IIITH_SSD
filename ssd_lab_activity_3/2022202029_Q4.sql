SELECT DEPARTMENT.Dnumber, Dname, COUNT(*) FROM DEPARTMENT INNER JOIN
 DEPT_LOCATIONS ON DEPARTMENT.Dnumber=DEPT_LOCATIONS.Dnumber
  WHERE Mgr_ssn IN (SELECT Mgr_ssn FROM DEPARTMENT 
  INNER JOIN DEPENDENT ON DEPARTMENT.Mgr_ssn=DEPENDENT.Essn WHERE
   SEX="F" GROUP BY Mgr_ssn HAVING
 COUNT(*) >1) GROUP BY Dnumber;