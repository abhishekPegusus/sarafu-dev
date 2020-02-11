import { Injectable } from "@angular/core";
import { FeatureTableData } from "../data/feature-table";

@Injectable()
export class FeatureTableService extends FeatureTableData {
  data = [
    {
      id: 1,
      firstName: "Mark",
      lastName: "Otto",
      username: "@mdo",
      email: "mdo@gmail.com",
      age: "28"
    },
    {
      id: 2,
      firstName: "Jacob",
      lastName: "Thornton",
      username: "@fat",
      email: "fat@yandex.ru",
      age: "45"
    },
    {
      id: 3,
      firstName: "Larry",
      lastName: "Bird",
      username: "@twitter",
      email: "twitter@outlook.com",
      age: "18"
    }
  ];

  getData() {
    return this.data;
  }
}
