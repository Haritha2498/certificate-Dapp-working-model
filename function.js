function fun()
        {
            let course=document.getElementById("id1").value;
            let id=document.getElementById("id2").value;
            let name=document.getElementById("id3").value;
            let grade=document.getElementById("id4").value;
            let date=document.getElementById("id5").value;

            localStorage.setItem("ID",id);
            localStorage.setItem("COURSE",course);
            localStorage.setItem("NAME",name);
            localStorage.setItem("GRADE",grade);
            localStorage.setItem("DATE",date);

            let a=localStorage.getItem("COURSE");
            let b=localStorage.getItem("ID");
            let c=localStorage.getItem("NAME");
            let d=localStorage.getItem("GRADE");
            let e=localStorage.getItem("DATE");

            console.log("course logged in "+a);
            console.log("Candidate ID "+b);
            console.log("Candiate Name:"+c);
            console.log("Grade :"+d);
            console.log("Issued Date :"+e);

        }


