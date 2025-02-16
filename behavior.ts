namespace myCustomBlocks {
    let lastItem: MyItem | null = null;
    let lastExpectedItem: MyItem | null = null;
    let lastExpectedCount: number = 0;

    /**
     * Перечисление доступных предметов для выбора
     */
    enum MyItem {
        //% block="Какао-бобы"
        CocoaBeans = "Cocoa Beans",
        //% block="Пшеница"
        Wheat = "Wheat",
        //% block="Морковь"
        Carrot = "Carrot"
    }

    /**
     * Логическая проверка количества предметов
     * Используется ВНУТРИ IF в MakeCode
     * Запоминает, что выбрал ребёнок
     */
    //% block="количество %item ожидаемое %count"
    //% item.shadow="dropdown"
    //% count.shadow=math_number defl=10
    export function getItemCount(item: MyItem, count: number): number {
        lastItem = item;
        return item === lastExpectedItem ? lastExpectedCount : 0;
    }
}
