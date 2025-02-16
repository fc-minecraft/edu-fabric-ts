namespace myCustomBlocks {
    let lastItem: Item | null = null;
    let lastExpectedItem: Item | null = null;
    let lastExpectedCount: number = 0;

    /**
     * Логическая проверка количества предметов
     * Используется ВНУТРИ IF в MakeCode
     * Запоминает, какой предмет выбрал ребёнок
     */
    //% block="количество %item"
    //% item.shadow=minecraftItem
    export function getItemCount(item: Item): number {
        lastItem = item;
        return item === lastExpectedItem ? lastExpectedCount : 0;
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
     * Ожидаемое значение передаётся скрыто через MD
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
