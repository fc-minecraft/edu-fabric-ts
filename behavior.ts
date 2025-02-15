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
        return item === lastExpectedItem ? lastExpectedCount : 0;
    }

    /**
     * Прекратить подачу
     * Проверяет, правильно ли ребёнок собрал конструкцию в MD
     * Ожидаемое значение передаётся скрыто через MD
     */
    //% block="прекратить подачу"
    export function stopBlock(expectedItem: Item, expectedCount: number): void {
        lastExpectedItem = expectedItem;
        lastExpectedCount = expectedCount;

        if (lastItem === expectedItem) {
            player.say(`Подача прекращена! Ожидалось: ${expectedCount} ${expectedItem}.`);
            blocks.place(Block.RedstoneBlock, world(0, 4, 0)); // Ставим блок красного камня в мире
        } else {
            player.say("Ошибка! Проверьте условия.");
        }
    }
}
