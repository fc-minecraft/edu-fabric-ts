namespace myCustomBlocks {
    /**
     * Операторы сравнения (выпадающий список в MakeCode)
     */
    export enum ComparisonOperator {
        //% block=">"
        GreaterThan,
        //% block="<"
        LessThan,
        //% block=">="
        GreaterOrEqual,
        //% block="<="
        LessOrEqual,
        //% block="=="
        Equal
    }

    let lastItem: Item | null = null;
    let lastOperator: ComparisonOperator | null = null;
    let lastCount: number = 0;

    /**
     * Логическая проверка количества предметов
     * Используется ВНУТРИ IF в MakeCode
     * Позволяет выбрать предмет, оператор сравнения и ввести число
     */
    //% block="количество %item %operator %expectedInputCount"
    export function getItemCount(item: Item, operator: ComparisonOperator, n: number): boolean {
        lastItem = item;
        lastOperator = operator;
        lastCount = n;

        return true;
    }

    /**
     * Прекратить подачу
     * Проверяет, правильно ли ребёнок собрал конструкцию в MD
     */
    //% block="прекратить подачу"
    export function stopBlock(): void {
        if (lastItem === Item.CocoaBeans && lastOperator === ComparisonOperator.LessOrEqual && lastCount === 10) {
            player.say("Подача завершена! Ожидалось: 10 Какао-бобов.");
            blocks.place(Block.RedstoneBlock, world(0, 4, 0)); // Ставим блок красного камня в мире
            lastCount = 0;
            lastItem = null;
            lastOperator = null;
        } else {
            player.say("Ошибка! Проверьте условия.");
        }
    }



















    /**
     * Ограниченные блоки с визуальным меню выбора
     */
    enum LimitedBlocks {
        //% blockIdentity=blocks.block
        //% block="плотный лёд"
        PackedIce = Block.PackedIce,

        //% blockIdentity=blocks.block
        //% block="снег"
        SnowBlock = Block.Snow,

        //% blockIdentity=blocks.block
        //% block="белая шерсть"
        WhiteWool = Block.Wool
    }

    /**
     * Установить предмет агенту с визуальным выбором блоков
     */
    //% block="выдать агенту %block в количестве %count в слот %slot"
    //% count.min=1 count.max=64 slot.min=1 slot.max=9
    export function agentSetLimitedItem(block: LimitedBlocks, count: number, slot: number): void {
        agent.setItem(block, count, slot);
    }


}
