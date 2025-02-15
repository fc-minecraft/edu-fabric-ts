namespace myCustomBlocks {
    let lastItem: Item | null = null;
    let lastExpectedItem: Item | null = null;
    let lastExpectedCount: number = 0;

    /**
     * Логическая проверка количества блоков
     * Используется ВНУТРИ IF в MakeCode
     * Запоминает, что выбрал ребёнок
     */
    //% block="количество %item"
    //% item.shadow=itemPicker
    export function checkBlockCount(item: Item, count: number): number {
        lastItem = item;
        return 0;
    }
}
