namespace myCustomBlocks {
    let lastItem: Item | null = null;
    let lastExpectedItem: Item | null = null;
    let lastExpectedCount: number = 0;

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

    /**
     * Логическая проверка количества предметов
     * Используется ВНУТРИ IF в MakeCode
     * Позволяет выбрать предмет, оператор сравнения и ввести число
     */
    //% block="количество %item %operator %expectedInputCount"
    export function getItemCount(item: Item, operator: ComparisonOperator, n: number): boolean {
        lastItem = item;

        if (item !== lastExpectedItem) {
            return false; // Если выбран не тот предмет, сразу возвращаем false
        }

        // Используем оператор сравнения
        switch (operator) {
            case ComparisonOperator.GreaterThan:
                return lastExpectedCount > n;
            case ComparisonOperator.LessThan:
                return lastExpectedCount < n;
            case ComparisonOperator.GreaterOrEqual:
                return lastExpectedCount >= n;
            case ComparisonOperator.LessOrEqual:
                return lastExpectedCount <= n;
            case ComparisonOperator.Equal:
                return lastExpectedCount === n;
            default:
                return false;
        }
    }

    /**
     * Скрытая функция для установки ожидаемых значений
     * Используется в MD, не видна игроку
     */
    export function setExpectedValues(expectedItem: Item, expectedCount: number): void {
        lastExpectedItem = expectedItem;
        lastExpectedCount = expectedCount;
    }

    /**
     * Прекратить подачу
     * Проверяет, правильно ли ребёнок собрал конструкцию в MD
     */
    //% block="прекратить подачу"
    export function stopBlock(): void {
        if (lastItem === lastExpectedItem) {
            player.say(`Подача прекращена! Ожидалось: ${lastExpectedCount} ${lastExpectedItem}.`);
            blocks.place(Block.RedstoneBlock, world(0, 4, 0)); // Ставим блок красного камня в мире
        } else {
            player.say("Ошибка! Проверьте условия.");
        }
        player.say("Команда отработала.");
    }
}
