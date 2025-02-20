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
     * Ограниченные блоки с графическим меню выбора
     * (Использует стандартные иконки из block.jres)
     */
    export enum LimitedBlocks {
        // ❄️ Лёд и снег
        //% block="`Block.PackedIce`"
        PackedIce = Block.PackedIce,
        //% block="`Block.Snow`"
        SnowBlock = Block.Snow,

        // 🪵 Деревянные доски (все виды)
        //% block="`Block.PlanksOak`"
        OakPlanks = Block.PlanksOak,

        // 🌿 Песок и гравий
        //% block="`Block.Sand`"
        Sand = Block.Sand,
        //% block="`Block.RedSand`"
        RedSand = Block.RedSand,
        //% block="`Block.Gravel`"
        Gravel = Block.Gravel,

        // 🐑 Цветная шерсть (16 цветов)
        //% block="`Block.Wool`"
        WhiteWool = Block.Wool,
        //% block="`Block.OrangeWool`"
        OrangeWool = Block.OrangeWool,
        //% block="`Block.MagentaWool`"
        MagentaWool = Block.MagentaWool,
        //% block="`Block.LightBlueWool`"
        LightBlueWool = Block.LightBlueWool,
        //% block="`Block.YellowWool`"
        YellowWool = Block.YellowWool,
        //% block="`Block.LimeWool`"
        LimeWool = Block.LimeWool,
        //% block="`Block.PinkWool`"
        PinkWool = Block.PinkWool,
        //% block="`Block.GrayWool`"
        GrayWool = Block.GrayWool,
        //% block="`Block.LightGrayWool`"
        LightGrayWool = Block.LightGrayWool,
        //% block="`Block.CyanWool`"
        CyanWool = Block.CyanWool,
        //% block="`Block.PurpleWool`"
        PurpleWool = Block.PurpleWool,
        //% block="`Block.BlueWool`"
        BlueWool = Block.BlueWool,
        //% block="`Block.BrownWool`"
        BrownWool = Block.BrownWool,
        //% block="`Block.GreenWool`"
        GreenWool = Block.GreenWool,
        //% block="`Block.RedWool`"
        RedWool = Block.RedWool,
        //% block="`Block.BlackWool`"
        BlackWool = Block.BlackWool,

        // 🏺 Цветная глина (16 цветов)
        //% block="`Block.WhiteTerracotta`"
        WhiteTerracotta = Block.WhiteTerracotta,
        //% block="`Block.OrangeTerracotta`"
        OrangeTerracotta = Block.OrangeTerracotta,
        //% block="`Block.MagentaTerracotta`"
        MagentaTerracotta = Block.MagentaTerracotta,
        //% block="`Block.LightBlueTerracotta`"
        LightBlueTerracotta = Block.LightBlueTerracotta,
        //% block="`Block.YellowTerracotta`"
        YellowTerracotta = Block.YellowTerracotta,
        //% block="`Block.LimeTerracotta`"
        LimeTerracotta = Block.LimeTerracotta,
        //% block="`Block.PinkTerracotta`"
        PinkTerracotta = Block.PinkTerracotta,
        //% block="`Block.GrayTerracotta`"
        GrayTerracotta = Block.GrayTerracotta,
        //% block="`Block.LightGrayTerracotta`"
        LightGrayTerracotta = Block.LightGrayTerracotta,
        //% block="`Block.CyanTerracotta`"
        CyanTerracotta = Block.CyanTerracotta,
        //% block="`Block.PurpleTerracotta`"
        PurpleTerracotta = Block.PurpleTerracotta,
        //% block="`Block.BlueTerracotta`"
        BlueTerracotta = Block.BlueTerracotta,
        //% block="`Block.BrownTerracotta`"
        BrownTerracotta = Block.BrownTerracotta,
        //% block="`Block.GreenTerracotta`"
        GreenTerracotta = Block.GreenTerracotta,
        //% block="`Block.RedTerracotta`"
        RedTerracotta = Block.RedTerracotta,
        //% block="`Block.BlackTerracotta`"
        BlackTerracotta = Block.BlackTerracotta
    }

    /**
     * Установить предмет агенту с ограниченным выбором блоков
     */
    //% block="выдать агенту $blockType в количестве $n"
    export function agentSetLimitedItem(blockType: LimitedBlocks, n: number): void {
        agent.setItem(blockType, n, 1);
    }






}
