CREATE DEFINER=`root`@`localhost` PROCEDURE `getdetails`(
    INOUT custdata VARCHAR(4000)
)
BEGIN
    DECLARE finish INT DEFAULT 0;
    DECLARE onecustomer VARCHAR(255) DEFAULT "";
    DECLARE getcustomers CURSOR FOR SELECT CONCAT(CUST_NAME," ",CUST_COUNTRY," ",GRADE," ",WORKING_AREA) FROM customer WHERE AGENT_CODE LIKE 'A00%'; 
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET finish = 1;
    OPEN getcustomers;
    fetching: LOOP
        FETCH getcustomers INTO onecustomer;
        IF finish = 1 THEN
            LEAVE fetching;
        END IF;
        SET custdata = CONCAT(onecustomer,"\n",custdata );
    END LOOP fetching;
    CLOSE getcustomers;
END
set @custlist="";
Call getdetails(@custlist);
select @custlist;
set @custlist="";
Call getdetails(@custlist);
select @custlist;
