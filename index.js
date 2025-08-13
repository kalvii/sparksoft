// let dive =document.querySelector(".mainpage");
// let newdev=document.createElement("div");
// let text=document.createTextNode("this is child box");
// newdev.appendChild(text);
// newdev.setAttribute("id","nchild");
// dive.appendChild(newdev);
//1stjs code
// function addChildBox() {
//     let dive = document.querySelector("#n1");

//     // Check if already exists to avoid duplicates
//     if (!document.getElementById("nchild")) {
//         let newdev = document.createElement("div");
//         let text = document.createTextNode("this is child box");
//         newdev.appendChild(text);
//         newdev.setAttribute("id", "nchild");
//         dive.appendChild(newdev);
//     }
// }

// function removeChildBox() {
//     let child = document.getElementById("nchild");
//     if (child) {
//         child.remove();
//     }
// }

// // Attach events
// let mainDiv = document.querySelector("#n1");
// mainDiv.addEventListener("mouseenter", addChildBox);
// mainDiv.addEventListener("mouseleave", removeChildBox);
// function addChildBox() {
//     let dive = document.querySelector(".mainpage");

//     // Avoid duplicates
//     if (!document.getElementById("nchild")) {
//         let newdev = document.createElement("div");
//         newdev.setAttribute("id", "nchild");

//         // Heading
//         let heading = document.createElement("h1");
//         heading.textContent = "Application services";
//         newdev.appendChild(heading);

//         // Array of different paragraph texts
//         let paragraphs = [
//             "Application management",
//             "Enterprise change management",
//             "Oracle services",
//             "Quality engineering",
//             "Salesforce services",
//             "SAP services",
//         ];

//         // Create and append paragraphs
//         paragraphs.forEach(text => {
//             let para = document.createElement("p");
//             para.textContent = text;
//             newdev.appendChild(para);
//         });

//         dive.appendChild(newdev);
//     }
// }

// function removeChildBox() {
//     let child = document.getElementById("nchild");
//     if (child) {
//         child.remove();
//     }
// }

// let mainDiv = document.querySelector("#n1");
// mainDiv.addEventListener("mouseenter", addChildBox);
// mainDiv.addEventListener("mouseleave", removeChildBox);

// SERVICE////////////

function addChildBox() {
    let dive = document.querySelector(".mainpage");

    // Avoid duplicates
    if (!document.getElementById("nchild")) {
        let newdev = document.createElement("div");
        newdev.setAttribute("id", "nchild");

        // Heading
        let heading = document.createElement("h3");
        heading.textContent = "Application services";
        newdev.appendChild(heading);

        // Paragraph texts
        let paragraphs = [
            "Application management",
            " ",
            "Enterprise change management",
            "Oracle services",
            "Quality engineering",
            "Salesforce services",
            "SAP services",
        ];

        // Append heading first, then paragraphs with delay
        dive.appendChild(newdev);

        paragraphs.forEach((text, index) => {
            setTimeout(() => {
                let para = document.createElement("p");
                para.textContent = text;
                newdev.appendChild(para);
            }, index * 100); // 500ms delay between each paragraph
        });
    }
}

function removeChildBox() {
    let child = document.getElementById("nchild");
    if (child) {
        child.remove();
    }
}

let mainDiv = document.querySelector("#n1");
mainDiv.addEventListener("mouseenter", addChildBox);
mainDiv.addEventListener("mouseleave", removeChildBox);

//////////// INDUSTRIES/////////

function addChildBox2() {
    let dive2 = document.querySelector(".mainpage");

    // Avoid duplicates
    if (!document.getElementById("nchild2")) {
        let newdev2 = document.createElement("div");
        newdev2.setAttribute("id", "nchild2");

        // Heading
        let heading = document.createElement("h3");
        heading.textContent = "Industries";
        newdev2.appendChild(heading);

        // Paragraph texts
        let paragraphs2 = [
            "Banking and Financial Services",
            "Insurance",
            "Healthcare and Life Sciences",
            "Technology, Media, and Telecom",
            "Consumer Services",
            
        ];

        // Append heading first, then paragraphs with delay
        dive2.appendChild(newdev2);

        paragraphs2.forEach((text, index) => {
            setTimeout(() => {
                let para = document.createElement("p");
                para.textContent = text;
                newdev2.appendChild(para);
            }, index * 100); // 500ms delay between each paragraph
        });
    }
}

function removeChildBox2() {
    let child = document.getElementById("nchild2");
    if (child) {
        child.remove();
    }
}

let mainDiv2 = document.querySelector("#n2");
mainDiv2.addEventListener("mouseenter", addChildBox2);
mainDiv2.addEventListener("mouseleave", removeChildBox2);

///INSIGHTS//////

function addChildBox3() {
    let dive3 = document.querySelector(".mainpage");

    // Avoid duplicates
    if (!document.getElementById("nchild3")) {
        let newdev3 = document.createElement("div");
        newdev3.setAttribute("id", "nchild3");

        // Heading
        let heading = document.createElement("h3");
        heading.textContent = "Business insights";
        newdev3.appendChild(heading);

        // Paragraph texts
        let paragraphs3 = [
            "Analyst mentions",
            "Blogs",
            "Brochures",
            "Client stories",
            "Customer engagement",
            "Design and strategy",
            "Technology transformation",
            "Workplace and culture",
            "Slated For Tomorrow",
        ];

        // Append heading first, then paragraphs with delay
        dive3.appendChild(newdev3);

        paragraphs3.forEach((text, index) => {
            setTimeout(() => {
                let para = document.createElement("p");
                para.textContent = text;
                newdev3.appendChild(para);
            }, index * 100); // 500ms delay between each paragraph
        });
    }
}

function removeChildBox3() {
    let child = document.getElementById("nchild3");
    if (child) {
        child.remove();
    }
}

let mainDiv3 = document.querySelector("#n3");
mainDiv3.addEventListener("mouseenter", addChildBox3);
mainDiv3.addEventListener("mouseleave", removeChildBox3);

///Careers

function addChildBox4() {
    let dive4 = document.querySelector(".mainpage");

    // Avoid duplicates
    if (!document.getElementById("nchild4")) {
        let newdev4 = document.createElement("div");
        newdev4.setAttribute("id", "nchild4");

        // Heading
        let heading = document.createElement("h3");
        heading.textContent = "Current opportunities";
        newdev4.appendChild(heading);

        // Paragraph texts
        let paragraphs4= [
            "Life at SparkSoft",
            "Join our talent community",
        

        ];

        // Append heading first, then paragraphs with delay
        dive4.appendChild(newdev4);

        paragraphs4.forEach((text, index) => {
            setTimeout(() => {
                let para = document.createElement("p");
                para.textContent = text;
                newdev4.appendChild(para);
            }, index * 100); // 500ms delay between each paragraph
        });
    }
}

function removeChildBox4() {
    let child = document.getElementById("nchild4");
    if (child) {
        child.remove();
    }
}

let mainDiv4 = document.querySelector("#n4");
mainDiv4.addEventListener("mouseenter", addChildBox4);
mainDiv4.addEventListener("mouseleave", removeChildBox4);

