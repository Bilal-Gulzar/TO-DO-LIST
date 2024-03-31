#! /usr/bin/env node
import inquirer from "inquirer";
let toDo = [];
let condition = true;
while (condition) {
    console.log("\n\n==========  TO DO LIST  ===========\n");
    let addTask = await inquirer.prompt({
        name: "input1",
        type: "list",
        message: "what you want to do in TO DO list ?",
        choices: [
            "1.ADD Task",
            "2.Update Task",
            "3.View Task",
            "4.Mark as Done Task",
            "5.Delete",
            "6.Exit",
        ],
    });
    if (addTask.input1 === "1.ADD Task") {
        let task = await inquirer.prompt({
            name: "input2",
            type: "number",
            message: "How many tasks you want to add:",
        });
        if (task.input2 == 0) {
            console.log("Please select number from 1.");
        }
        else if (task.input2 > 0) {
            for (let i = 0; i < task.input2; i++) {
                let list = await inquirer.prompt({
                    name: "items",
                    type: "input",
                    message: "Enter the task:",
                });
                toDo.push(`${i + 1}.${list.items}`);
                console.log("Task Added!\n");
            }
            console.log("\nALL Tasks Added successfully!\n");
        }
        else {
            console.log("please select valid number.");
        }
    }
    else if (addTask.input1 === "2.Update Task") {
        let updateTask = await inquirer.prompt({
            name: "Task",
            type: "number",
            message: "Enter the Task Number to Update Task:",
        });
        if (updateTask.Task <= toDo.length) {
            let num1 = updateTask.Task;
            num1--;
            let updatValue = await inquirer.prompt({
                name: "value",
                type: "input",
                message: "Update Task:",
            });
            toDo[num1] = `${updateTask.Task}.${updatValue.value}`;
            console.log("\n Task Updated successfully!");
        }
        else {
            console.log("Please select valid task number.");
        }
    }
    else if (addTask.input1 === "3.View Task") {
        if (toDo.length == 0) {
            console.log("no Task ");
        }
        else {
            console.log("\nTasks:");
            for (let i = 0; i < toDo.length; i++) {
                console.log(`${toDo[i]} `);
            }
        }
    }
    else if (addTask.input1 === "4.Mark as Done Task") {
        let markDone = await inquirer.prompt({
            name: "input3",
            type: "number",
            message: "Enter Task Number to mark as Done:",
        });
        if (markDone.input3 <= toDo.length) {
            let a = markDone.input3;
            a--;
            toDo[a] = toDo[a] + " -- Task Done!";
            console.log("\n Mark Done Successfully!");
        }
        else {
            console.log("please select valid task number.");
        }
    }
    else if (addTask.input1 === "5.Delete") {
        let DeleteTask = await inquirer.prompt({
            name: "input4",
            type: "number",
            message: "Enter Task Number to delete:",
        });
        if (DeleteTask.input4 <= toDo.length) {
            let num = DeleteTask.input4;
            num--;
            toDo[num] = "  --  ";
            console.log("\n Task Deleted. ");
        }
        else {
            console.log("please select valid task number.");
        }
    }
    else if (addTask.input1 === "6.Exit") {
        let confirm = await inquirer.prompt({
            name: "input5",
            type: "confirm",
            message: "Do You want to add more Task in TO-DO List? ",
        });
        let ask = confirm.input5
            ? "\nLet's Continue Work.\n"
            : "\nThank You for Using TO-DO List.\n";
        console.log(ask);
        condition = confirm.input5;
    }
}
