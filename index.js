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

function createHoverBox(buttonId, boxId, headingText, paragraphs) {
    let button = document.querySelector(buttonId);

    function addBox() {
        let container = document.querySelector(".mainpage");

        if (!document.getElementById(boxId)) {
            let box = document.createElement("div");
            box.setAttribute("id", boxId);
            box.classList.add("hover-box");

            let heading = document.createElement("h3");
            heading.textContent = headingText;
            box.appendChild(heading);

            container.appendChild(box);

            paragraphs.forEach((text, index) => {
                setTimeout(() => {
                    let para = document.createElement("p");
                    para.textContent = text;
                    box.appendChild(para);
                }, index * 100);
            });
        }
    }

    function removeBox() {
        let box = document.getElementById(boxId);
        if (box) box.remove();
    }

let header1 = document.getElementById("mainheader");

        // When cursor enters header
        header1.addEventListener("mouseenter", function () {
            header1.style.backgroundColor = "black";
            header1.style.color = "white";
        });

        // When cursor leaves header
        header1.addEventListener("mouseleave", function () {
            header1.style.backgroundColor="transparent";
            header1.style.color = "black";
        });


    button.addEventListener("mouseenter", addBox);
    button.addEventListener("mouseleave", removeBox);
    
}

// Create all your sections here
createHoverBox("#n1", "nchild", "Application services", [
    "Application management",
    "Enterprise change management",
    "Oracle services",
    "Quality engineering",
    "Salesforce services",
    "SAP services"
]);

createHoverBox("#n2", "nchild2", "Industries", [
    "Banking and Financial Services",
    "Insurance",
    "Healthcare and Life Sciences",
    "Technology, Media, and Telecom",
    "Consumer Services"
]);

createHoverBox("#n3", "nchild3", "Business insights", [
    "Analyst mentions",
    "Blogs",
    "Brochures",
    "Client stories",
    "Customer engagement",
    "Design and strategy",
    "Technology transformation",
    "Workplace and culture",
    "Slated For Tomorrow"
]);

createHoverBox("#n4", "nchild4", "Current opportunities", [
    "Life at SparkSoft",
    "Join our talent community"
]);


