namespace myCustomBlocks {
    let lastItem: Item | null = null;
    let lastExpectedItem: Item | null = null;
    let lastExpectedCount: number = 0;

    /**
     * Логическая проверка количества предметов
     * Используется ВНУТРИ IF в MakeCode
     * Ребёнок выбирает только предмет, а количество передаётся в MD
     */
    //% block="количество %item"
    //% item.shadow=itemPicker
    export function getItemCount(item: Item): number {
        lastItem = item;
        return item === lastExpectedItem ? lastExpectedCount : 0; // Если предмет правильный, вернуть число из MD, иначе 0
    }

    /**
     * Прекратить подачу
     * Проверяет, правильно ли ребёнок собрал конструкцию в MD
     * Ожидаемое значение передаётся скрыто через MD
     */
    //% block="прекратить подачу"
    //% expectedItem.shadow=itemPicker
    //% expectedCount.shadow=math_number defl=10
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
