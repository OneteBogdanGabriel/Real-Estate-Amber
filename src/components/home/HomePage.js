import React from "react";
//import { Text, View, SafeAreaView, SectionList } from "react";
import {
  ListViewComponent,
  Inject,
  Virtualization
} from "@syncfusion/ej2-react-lists";
import "./HomePage.css";

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"]
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"]
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"]
  }
];

const commonData = [
  { name: "Nancy", icon: "N", id: "0" },
  { name: "Andrew", icon: "A", id: "1" },
  { name: "Janet", icon: "J", id: "2" }
];

let fields = { text: "name" };

const template =
  '<div class="e-list-wrapper e-list-avatar">' +
  "<span class=\"e-avatar e-avatar-circle ${icon} ${$imgUrl ? 'hideUI' : 'showUI' }\">" +
  "${icon}</span> <img class=\"e-avatar e-avatar-circle ${$imgUrl ? 'showUI' : 'hideUI' }\" " +
  "src=\"${$imgUrl ?  $imgUrl : ' ' }\" />" +
  '<span class="e-list-content">${name}</span></div>';

/*function Item({ title }) {
  return (
    <View>
      <Text className="title">{title}</Text>
    </View>
  );
}*/

function HomePage() {
  return (
    <div className="content-wrapper">
      <ListViewComponent
        id="ui-list"
        enableVirtualization={true}
        headerTitle="Contacts"
        fields={fields}
        cssClass="e-list-template"
        height={500}
        template={template}
        showHeader={true}
      >
        <Inject services={[Virtualization]} />
      </ListViewComponent>
    </div>
  );

  /*return (
    <SafeAreaView>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="header">{title}</Text>
        )}
      />
    </SafeAreaView>
  );*/
}

export default HomePage;
