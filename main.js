//1.pattern//
document.write("<br>");
var r=parseInt(prompt("enter the value:"));
		document.write("pattern 1")
		document.write("<br>");
		document.write("<br>");
		
			for(i=1;i<=r;i++)
			{
				 for(var k=1;k<=(r-i);k++)
				 {
					  document.write("&nbsp");
				 }
				  for(j=1;j<=i;j++)
				  {
					  document.write("*");
				  }
					  document.write("<br>");
					
				  
			}

//2.pattern//
document.write("<br>");
var r=parseInt(prompt("enter the value:"));
		document.write("pattern 2")
		document.write("<br>");
		document.write("<br>");
			for(i=1;i<=r;i++)
			{
				 for(var k=1;k<r;k++)
				 {
					  document.write("&nbsp");
					  document.write("&nbsp");
					  
				 }
				  for(j=1;j<=i;j++)
				  {
				  if((i==j)||(j==1)||(i==r))
					   {
					  document.write("*");
					   }
					    else 
						{
							 document.write("&nbsp");
							 document.write("&nbsp");

						}
				  }
					  document.write("<br>");
					
				  
			}
//3.pattern 3//
document.write("<br>");
document.write("pattern 3")

		document.write("<br>");
		document.write("<br>");
var row=parseInt(prompt("enter the row:"));
			for(i=1;i<=row;i++)
			{
				  for(m=1;m<=(row-i)+1;m++)
				  {
					 
				       document.write(m);
					   
			        }  
					document.write("<br>");
			}
// abcd pattern//
document.write("<br>");
document.write("pattern 4")
		document.write("<br>");
		document.write("<br>");
 let ab=["A","B","C","D","E"]
 {
	 for(i=1;i<6;i++)
	 {
		 for(j=0;j<i;j++)
		 {
			  document.write(ab[j]);
		 }
		 document.write("<br>");
	 }
 }
 //12334 //
 document.write("<br>");
 document.write("pattern 5")
		document.write("<br>");
		document.write("<br>");
 for(i=1;i<=5;i++)
 {

	for(j=1;j<=i;j++)
	  {
		 document.write(i);
		
	}
	document.write("<br>");
}
// 6.pattern 6//
