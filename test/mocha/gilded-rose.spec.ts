import { expect } from "chai";
import { Item, GildedRose } from "@/gilded-rose";

import testData from "../testData";
describe("Gilded Rose", () => {
  for (const test of testData) {
    const [itemName, sell, quality, sellOut, qualityOut] = test;
    const desc = {
      itemName,
      sell,
      quality,
      sellOut,
      qualityOut,
    };

    it(JSON.stringify(desc), () => {
      const gildedRose = new GildedRose([new Item(itemName, sell, quality)]);
      const items = gildedRose.updateQuality();

      expect(items[0].sellIn).to.equal(sellOut);
      expect(items[0].quality).to.equal(qualityOut);
    });
  }

  /*
  it("generate test data", () => {
    const itemNames = [
      "Aged Brie",
      "Backstage passes to a TAFKAL80ETC concert",
      "Sulfuras, Hand of Ragnaros",
      "normal item",
    ];

    let mochaOut: [string, number, number, number, number][] = [];

    const [minSell, maxSell] = [-1, 12];
    const [minQuality, maxQuality] = [-1, 51];

    for (const itemName of itemNames) {
      for (let sell = minSell; sell <= maxSell; sell++) {
        for (let quality = minQuality; quality <= maxQuality; quality++) {
          const gildedRose = new GildedRose([
            new Item(itemName, sell, quality),
          ]);
          const items = gildedRose.updateQuality();

          const sellOut = items[0].sellIn;
          const qualityOut = items[0].quality;

          mochaOut.push([itemName, sell, quality, sellOut, qualityOut]);
        }
      }
    }

    console.log(JSON.stringify(mochaOut));
    console.log(mochaOut.length);
  });
  */
});
