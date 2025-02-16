namespace myCustomBlocks {
    let lastBlock: Block | null = null;
    let lastExpectedBlock: Block | null = null;
    let lastExpectedCount: number = 0;

    /**
     * Логическая проверка количества блоков
     * Используется ВНУТРИ IF в MakeCode
     * Запоминает, какой блок выбрал ребёнок
     */
    //% block="количество %block"
    //% block.shadow=minecraftBlock
    export function getBlockCount(block: Block, count: number): number {
        lastBlock = block;
        return block === lastExpectedBlock ? lastExpectedCount : 0;
    }

    /**
     * Прекратить подачу
     * Проверяет, правильно ли ребёнок собрал конструкцию в MD
     * Ожидаемое значение передаётся скрыто через MD
     */
    //% block="прекратить подачу"
    export function stopBlock(expectedBlock: Block, expectedCount: number): void {
        lastExpectedBlock = expectedBlock;
        lastExpectedCount = expectedCount;

        if (lastBlock === expectedBlock) {
            player.say(`Подача прекращена! Ожидалось: ${expectedCount} ${expectedBlock}.`);
            blocks.place(Block.RedstoneBlock, world(0, 4, 0)); // Ставим блок красного камня в мире
        } else {
            player.say("Ошибка! Проверьте условия.");
        }
    }
}
