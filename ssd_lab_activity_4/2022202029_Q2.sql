CREATE DEFINER=`root`@`localhost` PROCEDURE `citybasedselection`(in city varchar(20))
BEGIN
SELECT CUST_NAME FROM customer WHERE WORKING_AREA=city;
END
