namespace myCustomBlocks {
    let lastItem: Item | null = null;
    let lastComparison: ComparisonOperator | null = null;
    let lastCount: number | null = null;

    /**
     * Оператор сравнения (чтобы сделать выбор знака кликабельным)
     */
    enum ComparisonOperator {
        //% block=">"
        Greater = ">",
        //% block="<"
        Less = "<",
        //% block=">="
        GreaterOrEqual = ">=",
        //% block="<="
        LessOrEqual = "<=",
        //% block="=="
        Equal = "=="
    }

    /**
     * Логическая проверка количества предметов
     * Используется ВНУТРИ IF в MakeCode
     * Запоминает, что выбрал ребёнок
     */
    //% block="проверить %item %comparison %count"
    //% item.shadow=itemPicker
    //% comparison.defl=ComparisonOperator.GreaterOrEqual
    //% count.shadow=math_number defl=10
    export function checkItemCount(item: Item, comparison: ComparisonOperator, count: number): boolean {
        lastItem = item;
        lastComparison = comparison;
        lastCount = count;
        return true; // Пустышка для MakeCode
    }

    /**
     * Прекратить подачу
     * Проверяет, собрал ли ребёнок правильную комбинацию
     */
    //% block="прекратить подачу если %expectedItem %expectedComparison %expectedCount"
    //% expectedItem.shadow=itemPicker
    //% expectedComparison.defl=ComparisonOperator.GreaterOrEqual
    //% expectedCount.shadow=math_number defl=10
    export function stopItem(expectedItem: Item, expectedComparison: ComparisonOperator, expectedCount: number): void {
        if (lastItem === expectedItem && lastComparison === expectedComparison && lastCount === expectedCount) {
            player.say("Подача прекращена! Вы выбрали правильную комбинацию.");
        } else {
            player.say("Ошибка! Проверьте условия.");
        }
    }
}
