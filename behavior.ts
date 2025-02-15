namespace myCustomBlocks {
    let lastItem: Item | null = null;

    /**
     * Логическая проверка количества предметов
     * Используется ВНУТРИ IF в MakeCode
     * Ребёнок выбирает только предмет
     */
    //% block="количество %item"
    //% item.shadow=itemPicker
    export function getItemCount(item: Item): number {
        lastItem = item;
        return 0; // Заглушка, в MakeCode заменяется на ожидаемое значение
    }

    /**
     * Прекратить подачу
     * Проверяет, правильно ли ребёнок выбрал блок и число
     */
    //% block="прекратить подачу если %selectedItem ожидаемое %expectedCount"
    //% selectedItem.shadow=itemPicker
    //% expectedCount.shadow=math_number defl=10
    export function stopBlock(selectedItem: Item, expectedCount: number): void {
        if (lastItem === selectedItem) {
            player.say(`Подача прекращена! Вы выбрали ${expectedCount} ${selectedItem}.`);
        } else {
            player.say("Ошибка! Проверьте условия.");
        }
    }
}
