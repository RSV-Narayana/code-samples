import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  //Declaring variables with default initial values
  inputData: any = [
    {
        "headerText": "Your HP All-In Plan",
        "tab_identifier": "yourhpallinplan",
        "order": "1",
        "tab_available_locale": "",
        "contentbox1_Title": "",
        "contentbox1_Source": "html",
        "contentbox1_Type": "Standard",
        "contentbox1_Data": "<div class=\"card\">\n   <div class=\"card__title\">Manage your HP All-In Plan</div>\n   <div class=\"card__content\">\n      <p>Find information including:</p>\n      <ul>\n         <li>Your all-inclusive plan</li>\n         <li>Your current ink status</li>\n         <li>Page count and rollover pages</li>\n         <li>Shipments and tracking</li>\n\t\t <li>Billing</li>\n\t\t <li>Important notifications</li>\n      </ul>\n      <p>Make changes to your plan and update your account information anytime.</p>\n      <p> <a id=\"HPAllinPlan_manage_GotoHPAllInPlanaccount\" class=\"btn\" target=\"_blank\" href=\" https://myaccount.hp.com/ucde/account-details/subscriptions\" title=\"Go to HP All-In Plan account\"><span aria-hidden=\"true\">Go to HP All-In Plan account</span> </a></p>\n   </div>\n</div>",
        "contentbox1_Position": "1|1,1",
        "contentbox2_Title": "",
        "contentbox2_Source": "html",
        "contentbox2_Type": "Standard",
        "contentbox2_Data": "<div class=\"card\">\n   <div class=\"card__title\">Change or check billing information</div>\n   <div class=\"card_content\">\n      <p>Use the Shipping or Billing panel in your HP All-In Plan account to review and edit your billing address, payment, and other billing information.</p>\n      <p> <a id=\"HPAllinPlan_Billing_GotoHPAllInPlanaccount\" class=\"btn\" target=\"_blank\" href=\"https://myaccount.hp.com/ucde/account-details/subscriptions\" title=\"Go to HP All-In Plan account\">Go to HP All-In Plan account</a> </p>\n   </div>\n</div>",
        "contentbox2_Position": "2|1,2",
        "contentbox3_Title": "",
        "contentbox3_Source": "",
        "contentbox3_Type": "",
        "contentbox3_Data": "<div class=\"card\">\n   <div class=\"card__title\">Get help</div>\n   <div class=\"card_content\">\n      <p>HP's 24/7 Pro live support team will help you understand your product features, assist you in setup and configuration questions, provide advice on ways to improve connectivity to the Internet, and changing or canceling your service.</p>\n      <p> <a id=\"HPAllinPlan_Gethelp_ConnectwithHPProlivesupport\" class=\"btn\" target=\"_blank\" href=\"/{cc}-{lc}/contact/all-in-plan-serial-number\" title=\"Connect with HP Pro live support\">Connect with HP Pro live support</a> </p>\n   </div>\n</div>",
        "contentbox3_Position": "2|2,3",
    },
    {
        "headerText": "Your printer",
        "tab_identifier": "yourprinter",
        "order": "3",
        "tab_available_locale": "",
        "contentbox1_Title": "",
        "contentbox1_Source": "html",
        "contentbox1_Type": "Standard",
        "contentbox1_Data": "<div class=\"card\">\n   <div class=\"card__title\">Connect your printer to a network</div>\n   <div class=\"card__content\">\n      <p>If you are no longer able to print, <a id=\"Printer_connecttonetwork_checkyourwificonnection_ish_2026505-1746064-16\" target=\"_blank\" data-sdp-document=\"ish_2026505-1746064-16\" href=\"/{cc}-{lc}/document/ish_2026505-1746064-16\" title=\"check your wi-fi connection\"><span aria-hidden=\"true\">check your wi-fi connection</span></a> first.</p>\n      <p>Tip: There are two kinds of connectivity that can affect service: connecting a printer externally to HP services (internet), and connecting the printer to a network via Wi-Fi or ethernet.</p>\n      <p><a id=\"Printer_Connecttoanetwork_GotoHPAllinPlanaccount\" class=\"btn\" target=\"_blank\" href=\"https://myaccount.hp.com/ucde/account-details/subscriptions\" title=\"Go to HP All-In Plan account\"><span aria-hidden=\"true\">Go to HP All-In Plan account</span></a></p>\n   </div>\n</div>",
        "contentbox1_Position": "2|1,2",
        "contentbox2_Title": "",
        "contentbox2_Source": "html",
        "contentbox2_Type": "Standard",
        "contentbox2_Data": "<div class=\"card\">\n   <div class=\"card__title\">Set up your printer using the HP Smart application</div>\n   <div class=\"card__content\">\n      <p>Install the HP Smart app on your device to print, scan and share to your HP All-In printer anytime, anywhere.  Available from the App Store, Google Play, Microsoft or Mac App Store.</p>\n      <p><a id=\"Printer_Setup_LearnmoreabouttheHPSmartapp\" class=\"btn\" target=\"_blank\" href=\"https://www.hpsmart.com/us/en\" title=\"Learn more about the HP Smart app\"><span aria-hidden=\"true\">Learn more about the HP Smart app</span></a></p>\n   </div>\n</div>",
        "contentbox2_Position": "1|1,1",
        "contentbox3_Title": "",
        "contentbox3_Source": "html",
        "contentbox3_Type": "Standard",
        "contentbox3_Data": "<div class=\"card\">\n   <div class=\"card__title\">About your HP All-In Plan printer</div>\n   <div class=\"card__content\">\n      <p>Learn more or troubleshoot hardware problems by finding your printer listed below. </p>\n      <p><a href=\"/{cc}-{lc}/product/details/hp-envy-6000e-all-in-one-printer-series/model/2100187513\" id=\"Printer_HPENVY\" title=\"HP ENVY\"><span aria-hidden=\"true\">HP ENVY</span></a></p>\n\t   <p><a href=\"/{cc}-{lc}/product/details/hp-envy-inspire-7200e-series/model/2100993007\" id=\"Printer_HPENVYInspire\" title=\"HP ENVY Inspire\"><span aria-hidden=\"true\">HP ENVY Inspire</span></a></p>\n\t   <p><a href=\"/{cc}-{lc}/product/details/hp-officejet-pro-9010e-all-in-one-printer-series/38023430\" id=\"Printer_HPOfficeJetPro\" title=\"HP OfficeJet Pro\"><span aria-hidden=\"true\">HP OfficeJet Pro</span></a></p>\n      <p>Need help with a printer issue?</p>\n      <p><a id=\"Printer_ConnectwithHPprolivesupport\" class=\"btn\" target=\"_blank\" href=\"/{cc}-{lc}/contact/all-in-plan-serial-number\" title=\"Connect with HP Pro live support\"><span aria-hidden=\"true\">Connect with HP Pro live support</span></a></p>\n   </div>\n</div>",
        "contentbox3_Position": "1|2,3",
    },
    {
        "headerText": "Your ink",
        "tab_identifier": "yourink",
        "order": "2",
        "tab_available_locale": "",
        "contentbox1_Title": "",
        "contentbox1_Source": "html",
        "contentbox1_Type": "Standard",
        "contentbox1_Data": "<div class=\"card\">\n   <div class=\"card__title\">Shipping schedules</div>\n   <div class=\"card__content\">\n      <p>You  ink or toner is delivered only when you need it. The service monitors your HP All-In device via internet connection, and ships ink when it runs low.</p>\n      <p>Automatic ink delivery is included with HP Instant Ink. Ink is not delivered based on a schedule such as once a month, but rather when your ink levels are low. Flexible print plans are available that you can adjust anytime so you never run out of ink.</p>\n      <p>Sign in to your HP All-In Plan account to check recent shipments, as well as:</p>\n      <ul>\n         <li>Track your delivery</li>\n         <li>Check ink levels</li>\n         <li>Change or verify your shipping address</li>\n      </ul>\n      <p>Tip: Your latest shipment may have already arrived. Look around your home or office for recently delivered ink.</p>\n      <p><a id=\"Ink_Shippingschedule_GotoHPAllInPlanaccount\" class=\"btn\" target=\"_blank\" href=\"https://myaccount.hp.com/ucde/account-details/subscriptions\" title=\"Go to HP All-In Plan account\"><span aria-hidden=\"true\">Go to HP All-In Plan account</span></a></p>\n   </div>\n</div>",
        "contentbox1_Position": "1|1,1",
        "contentbox2_Title": "",
        "contentbox2_Source": "html",
        "contentbox2_Type": "Standard",
        "contentbox2_Data": "<div class=\"card\">\n   <div class=\"card__title\">Why do the cartridges look different</div>\n   <div class=\"card__content\">\n      <p style=\"line-height:24px !important\">Cartridges sent through the HP All-In plan may be a different size, shape, or number, but they will fit HP All-In printers and last longer than store-bought ones. Larger cartridges keep shipping costs low and reduce environmental impact.  <a id=\"Ink_Cartridgesquality_WatchthisHPshorttolearnmore_uNAdOob1fj4\" target=\"_blank\" href=\"https://www.youtube.com/watch?v=uNAdOob1fj4?autoplay=1&amp;rel=0\" title=\"Watch this HP short to learn more.\" data-sdp-video=\"uNAdOob1fj4\">Watch this HP short to learn more</a>.</p>\n      <p> <a id=\"Ink_Cartridgesquality_GotoHPAllInPlanaccount\" class=\"btn\" target=\"_blank\" href=\"https://myaccount.hp.com/ucde/account-details/subscriptions\" title=\"Go to HP All-In Plan account\">Go to HP All-In Plan account</a> </p>\n   </div>\n</div>",
        "contentbox2_Position": "2|2,2",
        "contentbox3_Title": "",
        "contentbox3_Source": "html",
        "contentbox3_Type": "Related",
        "contentbox3_Data": "<div class=\"card\">\n<div class=\"card__content\">\n    <div class=\"card__tag\">Related topics</div>\n    <p><a data-sdp-document=\"ish_3259780-2802006-16\" href=\"/{cc}-{lc}/document/ish_3259780-2802006-16\" target=\"_blank\" href=\"/{cc}-{lc}/document/ish_3259780-1986846-16\" id=\"related-topic-doc-ish_3259780-1986846-16\" title=\"How do I fix cartridge errors associated with printer enrollment\">\n        How do I fix cartridge errors associated with printer enrollment</a></p>\n    <p><a data-sdp-document=\"ish_3259780-1984777-16\" target=\"_blank\" href=\"/{cc}-{lc}/document/ish_3259780-1984777-16\" id=\"related-topic-doc-ish_3259780-1984777-16\" title=\"Why am I unable to print with HP Instant Ink cartridges?\">\n        Why am I unable to print with HP Instant Ink cartridges? </a></p>\n    <p><a data-sdp-document=\"ish_3259780-1984777-16\" target=\"_blank\" href=\"{cc}-{lc}/document/ish_1721989-1461843-16\" id=\"related-topic-doc-ish_3259780-1984777-16\" title=\"HP printer ink cartridge issues including 'Incompatible', 'Missing', 'Failure' and enrollment errors link:\">\n        HP printer ink cartridge issues including 'Incompatible', 'Missing', 'Failure' and enrollment errors link:</a></p>\n</div>\n</div>",
        "contentbox3_Position": "2|2,3",
    }
  ];
  
  maxRows: number[] = [1, 2];
  multiArray: any[][] = new Array();
  selectedTabContent: any = {};

  constructor(){
    //Perform sort in the ascending order based on the property 'order' 
    this.inputData = this.inputData.sort((a:any, b:any) => a?.order - b?.order);
    //Consider first item as the defaultly selected one   
    this.selectedTabContent = (this.inputData.filter((i: any) => i?.order === "1"))?.[0];
    this.orderContentBoxes();
  }


  //Create a Multi Dimension Array based on the Position data
  orderContentBoxes(){
    try{
      this.maxRows.forEach(r => {
        let rowArray = new Array();
        [...this.maxRows, 3].forEach(c => {
          
          let curPos = ((this.selectedTabContent?.['contentbox'+c+'_Position']?.split(",")[0])?.split("|"));
          let rowIndex = parseInt(curPos[1]);
          let colIndex = parseInt(curPos[0]) - 1;

          if(r == rowIndex){
            rowArray[colIndex] = ((this.selectedTabContent?.['contentbox'+c+'_Data']));
          }else if(c == colIndex){
            rowArray[c - 1] = '&nbsp;'; //Insert empty space to position the content boxes
          }
        });
        this.multiArray[r - 1] = rowArray

      })
    }catch(err){

    }
  }

  //Show the content of the seleted tab
  showContent(item: any){
    this.selectedTabContent = item;
    this.orderContentBoxes(); 
  }

}
