namespace myCustomBlocks {
    let lastItem: Item | null = null;
    let lastExpectedItem: Item | null = null;
    let lastExpectedCount: number = 0;

    /**
     * Логическая проверка количества блоков
     * Используется ВНУТРИ IF в MakeCode
     * Запоминает, что выбрал ребёнок
     */
    //% block="проверить %block %comparison %count"
    //% block.shadow=minecraftBlock
    //% comparison.shadow=dropdownComparison
    //% count.shadow=math_number defl=10
    export function checkBlockCount(block: Block, comparison: string, count: number): boolean {
        lastBlock = block;
        lastComparison = comparison;
        lastCount = count;
        return true; // Просто заглушка
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
