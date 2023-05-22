function validation()
{
	var Iname=document.registration.Iname;
	var Iprice=document.registration.Iprice;
	var Oname=document.registration.Oname;

	if(onlyTextIname(Iname))
	{
		if(eInfo(Iprice))
		{
			if(onlyTextOname(Oname))
			{
			}
		}
	}
	return false;
}	

function onlyTextIname(Iname)
{ 
	var letters = /^[A-Za-z]+$/;
	if(Iname.value.length==0)
	{
		alert('Please enter the item name');
		Iname.focus();
		return false;
	}

	else if(Iname.value.match(letters))
	{
		return true;
		
	}
	else
	{
		alert('Please Capitalize The First Letter of The Item Name');
		Iname.focus();
		return false;
	}
}

function eInfo(Iprice)
{ 
    
	var numbers = /^[0-9]/;
	if(Iprice.value.length == 0 )
	{
		alert('Please enter the item price');
		Iprice.focus();
		return false;
	}else if(Iprice.value.match(numbers))
	{
		return true;
	}
}
	
function onlyTextOname(Oname)
{ 
	var letters = /^[A-Za-z]+$/;
	if(Oname.value.length==0)
	{
		alert('Please Enter Owners Name');
		Oname.focus();
		return false;
	}
	else if(Oname.value.match(letters))
	{
		return true;
		
	}
	else
	{
		alert('Please Capitalize First Letter of Name');
		Oname.focus();
		return false;
		
	}
}












	