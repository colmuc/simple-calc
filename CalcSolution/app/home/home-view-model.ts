import { ObservableProperty } from "../observable-property-decorator";
import * as frame from "tns-core-modules/ui/frame";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Observable } from 'tns-core-modules/data/observable';

export class HomeViewModel extends Observable {
    onOpenDrawerTap() {
        let sideDrawer: RadSideDrawer = <RadSideDrawer>(frame.topmost().getViewById("sideDrawer"));
        sideDrawer.showDrawer();
    }
    onCloseDrawerTap() {
        let sideDrawer: RadSideDrawer = <RadSideDrawer>(frame.topmost().getViewById("sideDrawer"));
        sideDrawer.closeDrawer();
    }

   constructor() {
        super();
    }
}