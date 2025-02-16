namespace myCustomBlocks {
    let lastItem: Item | null = null;
    let lastExpectedItem: Item | null = null;
    let lastExpectedCount: number = 0;

    /**
     * Логическая проверка количества предметов
     * Используется ВНУТРИ IF в MakeCode
     * Запоминает, что выбрал ребёнок
     */
    //% block="количество %item ожидаемое %count"
    //% item.shadow=itemPicker
    //% count.shadow=math_number defl=10
    export function getItemCount(item: Item, count: number): number {
        lastItem = item;
        return item === lastExpectedItem ? lastExpectedCount : 0;
    }
}
