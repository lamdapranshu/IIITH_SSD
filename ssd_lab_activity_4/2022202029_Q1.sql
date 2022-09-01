CREATE DEFINER=`root`@`localhost` PROCEDURE `sumoftwo`(in `num1` int, in `num2` int, out `sum` int )
BEGIN
set sum=num1+num2;

END
