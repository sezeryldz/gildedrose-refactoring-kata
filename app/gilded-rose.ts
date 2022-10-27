export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const itemTypes = {
  agedBrie: "Aged Brie",
  backstagePass: "Backstage passes to a TAFKAL80ETC concert",
  handOfRagnaros: "Sulfuras, Hand of Ragnaros",
};

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  public updateQuality() {
    for (const item of this.items) {
      switch (item.name) {
        case itemTypes.agedBrie:
          this.updateAgedBrie(item);
          continue;
        case itemTypes.backstagePass:
          this.updateBackstagePass(item);
          continue;
        case itemTypes.handOfRagnaros:
          //for the current stage of the project, there is no need for this case to do anything.
          continue;
        default:
          this.updateNormal(item);
          continue;
      }
    }

    return this.items;
  }

  private updateAgedBrie(item: Item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
    item.sellIn = item.sellIn - 1;
    if (item.sellIn < 0) {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
      }
    }
  }

  private updateBackstagePass(item: Item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;

      if (item.sellIn < 11) {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
        }
      }
      if (item.sellIn < 6) {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
        }
      }
    }
    item.sellIn = item.sellIn - 1;
    if (item.sellIn < 0) {
      item.quality = item.quality - item.quality;
    }
  }

  private updateNormal(item: Item) {
    if (item.quality > 0) {
      item.quality = item.quality - 1;
    }
    item.sellIn = item.sellIn - 1;
    if (item.sellIn < 0) {
      if (item.quality > 0) {
        item.quality = item.quality - 1;
      }
    }
  }
}
