namespace myCustomBlocks {

    /**
     * Проверка количества какао
     */
    //% block="количество какао больше 10"
    export function checkCocoa(): boolean {
        let cocoaCount = 0;

        // Проверяем количество блоков какао в области 10x10x10 вокруг игрока
        for (let x = -5; x <= 5; x++) {
            for (let y = -5; y <= 5; y++) {
                for (let z = -5; z <= 5; z++) {
                    if (blocks.testForBlock(Block.Cocoa, positions.create(x, y, z))) {
                        cocoaCount++;
                    }
                }
            }
        }

        return cocoaCount > 10;
    }

    /**
     * Блок "стоп"
     */
    //% block="стоп"
    export function stopBlock(): void {
        player.say("Вы достигли условия 'какао больше 10'. Код завершен.");
    }

    /**
     * Проверка последовательности блоков
     */
    //% block="проверить последовательность"
    export function checkSequence(): void {
        if (checkCocoa()) {
            stopBlock();
        } else {
            player.say("Какао недостаточно. Продолжайте собирать.");
        }
    }
}
