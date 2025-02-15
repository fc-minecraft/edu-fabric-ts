namespace myCustomBlocks {
    let lastBlock: Block | null = null;
    let lastComparison: string | null = null;
    let lastCount: number | null = null;

    /**
     * Логическая проверка количества блоков
     * Используется ВНУТРИ IF в MakeCode
     * НИКАКИХ вычислений не делает, просто визуальный блок
     * Запоминает, что выбрал ребёнок
     */
    //% block="проверить %block %comparison %count"
    //% block.shadow=minecraftBlock
    //% comparison.shadow=comparisonOperator
    //% count.shadow=math_number min=1
    export function checkBlockCount(block: Block, comparison: string, count: number): boolean {
        lastBlock = block;
        lastComparison = comparison;
        lastCount = count;
        return true; // Пустышка для MakeCode
    }

    /**
     * Прекратить подачу
     * Проверяет, собрал ли ребёнок правильную комбинацию
     */
    //% block="прекратить подачу если %expectedBlock %expectedComparison %expectedCount"
    //% expectedBlock.shadow=minecraftBlock
    //% expectedComparison.shadow=comparisonOperator
    //% expectedCount.shadow=math_number min=1
    export function stopBlock(expectedBlock: Block, expectedComparison: string, expectedCount: number): void {
        if (lastBlock === expectedBlock && lastComparison === expectedComparison && lastCount === expectedCount) {
            player.say("Подача прекращена! Вы выбрали правильную комбинацию.");
        } else {
            player.say("Ошибка! Проверьте условия.");
        }
    }
}
