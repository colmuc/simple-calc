/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page';
import { HomeViewModel } from './home-view-model';
import { getFrameById } from "tns-core-modules/ui/frame";
import { Label } from "tns-core-modules/ui/label";
import { TextField } from "tns-core-modules/ui/text-field";
import { Button } from "tns-core-modules/ui/button";


// Event handler for Page "pageLoaded" event attached in home-page.xml
let pageLoaded = (args: EventData) => {



    let page = <Page>args.object;


    let input = <TextField>page.getViewById("input");
    let answer = <Label>page.getViewById("answer");
    let button = <Button>page.getViewById("getSolution");


    button.on('tap', (args: EventData) => {
      
        answer.text = "Your answer: "+eval(input.text);
    })
    page.bindingContext = new HomeViewModel();

    
}

export { pageLoaded }



export function onTapHome() {
    const frame = getFrameById("my-frame");
    frame.navigate("home/home-page");
}

export function onTapSettings() {
    const frame = getFrameById("my-frame");
    frame.navigate("settings/settings-page");
}
export function onTapAbout() {
    const frame = getFrameById("my-frame");
    frame.navigate("about/about-page");
}