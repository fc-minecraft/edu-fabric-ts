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
     * Ограниченные блоки для MakeCode с иконками (из стандартного набора)
     */
    export enum LimitedBlocks {
        // ❄️ Лёд и снег
        //% blockIdentity=blocks.block
        PackedIce = Block.PackedIce,
        //% blockIdentity=blocks.block
        SnowBlock = Block.Snow,

        // 🪵 Деревянные доски (все виды)
        //% blockIdentity=blocks.block
        OakPlanks = Block.PlanksOak,

        // 🌿 Песок и гравий
        //% blockIdentity=blocks.block
        Sand = Block.Sand,
        //% blockIdentity=blocks.block
        RedSand = Block.RedSand,
        //% blockIdentity=blocks.block
        Gravel = Block.Gravel,

        // 🐑 Цветная шерсть (16 цветов)
        //% blockIdentity=blocks.block
        WhiteWool = Block.Wool,
        //% blockIdentity=blocks.block
        OrangeWool = Block.OrangeWool,
        //% blockIdentity=blocks.block
        MagentaWool = Block.MagentaWool,
        //% blockIdentity=blocks.block
        LightBlueWool = Block.LightBlueWool,
        //% blockIdentity=blocks.block
        YellowWool = Block.YellowWool,
        //% blockIdentity=blocks.block
        LimeWool = Block.LimeWool,
        //% blockIdentity=blocks.block
        PinkWool = Block.PinkWool,
        //% blockIdentity=blocks.block
        GrayWool = Block.GrayWool,
        //% blockIdentity=blocks.block
        LightGrayWool = Block.LightGrayWool,
        //% blockIdentity=blocks.block
        CyanWool = Block.CyanWool,
        //% blockIdentity=blocks.block
        PurpleWool = Block.PurpleWool,
        //% blockIdentity=blocks.block
        BlueWool = Block.BlueWool,
        //% blockIdentity=blocks.block
        BrownWool = Block.BrownWool,
        //% blockIdentity=blocks.block
        GreenWool = Block.GreenWool,
        //% blockIdentity=blocks.block
        RedWool = Block.RedWool,
        //% blockIdentity=blocks.block
        BlackWool = Block.BlackWool,

        // 🏺 Цветная глина (16 цветов)
        //% blockIdentity=blocks.block
        WhiteTerracotta = Block.WhiteTerracotta,
        //% blockIdentity=blocks.block
        OrangeTerracotta = Block.OrangeTerracotta,
        //% blockIdentity=blocks.block
        MagentaTerracotta = Block.MagentaTerracotta,
        //% blockIdentity=blocks.block
        LightBlueTerracotta = Block.LightBlueTerracotta,
        //% blockIdentity=blocks.block
        YellowTerracotta = Block.YellowTerracotta,
        //% blockIdentity=blocks.block
        LimeTerracotta = Block.LimeTerracotta,
        //% blockIdentity=blocks.block
        PinkTerracotta = Block.PinkTerracotta,
        //% blockIdentity=blocks.block
        GrayTerracotta = Block.GrayTerracotta,
        //% blockIdentity=blocks.block
        LightGrayTerracotta = Block.LightGrayTerracotta,
        //% blockIdentity=blocks.block
        CyanTerracotta = Block.CyanTerracotta,
        //% blockIdentity=blocks.block
        PurpleTerracotta = Block.PurpleTerracotta,
        //% blockIdentity=blocks.block
        BlueTerracotta = Block.BlueTerracotta,
        //% blockIdentity=blocks.block
        BrownTerracotta = Block.BrownTerracotta,
        //% blockIdentity=blocks.block
        GreenTerracotta = Block.GreenTerracotta,
        //% blockIdentity=blocks.block
        RedTerracotta = Block.RedTerracotta,
        //% blockIdentity=blocks.block
        BlackTerracotta = Block.BlackTerracotta
    }

    /**
     * Установить предмет агенту с ограниченным выбором блоков
     */
    //% block="агент получает $blockType количеством $n"
    export function agentSetLimitedItem(blockType: LimitedBlocks, n: number): void {
        agent.setItem(blockType, n, 1);
    }






}
