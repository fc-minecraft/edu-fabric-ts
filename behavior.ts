namespace myCustomBlocks {
    let lastBlock: Block | null = null;
    let lastComparison: string | null = null;
    let lastCount: number | null = null;

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
     * Проверяет, собрал ли ребёнок правильную комбинацию
     */
    //% block="прекратить подачу если %expectedBlock %expectedComparison %expectedCount"
    //% expectedBlock.shadow=minecraftBlock
    //% expectedComparison.shadow=dropdownComparison
    //% expectedCount.shadow=math_number defl=10
    export function stopBlock(expectedBlock: Block, expectedComparison: string, expectedCount: number): void {
        if (lastBlock === expectedBlock && lastComparison === expectedComparison && lastCount === expectedCount) {
            player.say("Подача прекращена! Вы выбрали правильную комбинацию.");
        } else {
            player.say("Ошибка! Проверьте условия.");
        }
    }
}
