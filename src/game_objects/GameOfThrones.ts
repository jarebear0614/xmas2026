import { GameObjects } from "phaser";
import { BaseScene } from "../scenes/BaseScene";
import { BasePanel } from "./BasePanel";


export class GameOfThrones extends BasePanel 
{
    text1: GameObjects.Text;
    text2: GameObjects.Text;
    text3: GameObjects.Text;
    text4: GameObjects.Text;
    text5: GameObjects.Text;

    background: GameObjects.Image;

    constructor(scene: BaseScene, x: number, y: number)
    {
        super(scene, x, y);   
    }

    create(currentDate: Date) : BasePanel
    {
        super.create(currentDate);

        return this;
    }

    click(date: string, fn: (affirmation: string) => void): void 
    {
        super.click(date, fn);
    }
}