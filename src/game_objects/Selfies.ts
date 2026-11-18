import { GameObjects } from "phaser";
import { BaseScene } from "../scenes/BaseScene";
import { BasePanel } from "./BasePanel";
import { CURRENT_YEAR } from "../util/const";

export class Selfies extends BasePanel 
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

        this.background = this.scene.add.image(this.x, this.y, 'SelfiesBackground').setOrigin(0, 0);

        this.addObject(this.background, 0, 0);

        this.text1 = this.createNumberedText('5', currentDate, new Date(CURRENT_YEAR, 11, 5), '#AAAAAA', '#FFFFFF');
        this.text2 = this.createNumberedText('10', currentDate, new Date(CURRENT_YEAR, 11, 10), '#AAAAAA', '#FFFFFF');
        this.text3 = this.createNumberedText('15', currentDate, new Date(CURRENT_YEAR, 11, 15), '#AAAAAA', '#FFFFFF');
        this.text4 = this.createNumberedText('20', currentDate, new Date(CURRENT_YEAR, 11, 20), '#AAAAAA', '#FFFFFF');
        this.text5 = this.createNumberedText('25', currentDate, new Date(CURRENT_YEAR, 11, 25), '#AAAAAA', '#FFFFFF');

        let xOffsetText1 = (this.scene.getGameWidth() * 0.20) - (this.text1.displayWidth / 2);
        let yOffsetText1 = (this.scene.getGameHeight() * 0.20) - (this.text1.displayHeight / 2);

        this.text1.setPosition(this.x + xOffsetText1, this.y + yOffsetText1);
        this.addObject(this.text1, xOffsetText1, yOffsetText1);

        let xOffsetText2 = (this.scene.getGameWidth() * 0.78) - (this.text2.displayWidth / 2);
        let yOffsetText2 = (this.scene.getGameHeight() * 0.20) - (this.text2.displayHeight / 2);

        this.text2.setPosition(this.x + xOffsetText2, this.y + yOffsetText2);
        this.addObject(this.text2, xOffsetText2, yOffsetText2);

        let xOffsetText3 = (this.scene.getGameWidth() * 0.25) - (this.text3.displayWidth / 2);
        let yOffsetText3 = (this.scene.getGameHeight() * 0.95) - (this.text3.displayHeight / 2);

        this.text3.setPosition(this.x + xOffsetText3, this.y + yOffsetText3);
        this.addObject(this.text3, xOffsetText3, yOffsetText3);

        let xOffsetText4 = (this.scene.getGameWidth() * 0.75) - (this.text4.displayWidth / 2);
        let yOffsetText4 = (this.scene.getGameHeight() * 0.80) - (this.text4.displayHeight / 2);

        this.text4.setPosition(this.x + xOffsetText4, this.y + yOffsetText4);
        this.addObject(this.text4, xOffsetText4, yOffsetText4);

        let xOffsetText5 = (this.scene.getGameWidth() * 0.50) - (this.text5.displayWidth / 2);
        let yOffsetText5 = (this.scene.getGameHeight() * 0.50) - (this.text5.displayHeight / 2);

        this.text5.setPosition(this.x + xOffsetText5, this.y + yOffsetText5);
        this.addObject(this.text5, xOffsetText5, yOffsetText5);

        this.addInteractable(this.scene.add.zone(this.x + xOffsetText1, this.y + yOffsetText1, this.text1.displayWidth,this.text1.displayHeight).setName(`12/5/${CURRENT_YEAR}`).setOrigin(0, 0).setInteractive({useHandCursor: true}).setScrollFactor(0), xOffsetText1, yOffsetText1);
        this.addInteractable(this.scene.add.zone(this.x + xOffsetText2, this.y + yOffsetText2, this.text2.displayWidth,this.text2.displayHeight).setName(`12/10/${CURRENT_YEAR}`).setOrigin(0, 0).setInteractive({useHandCursor: true}).setScrollFactor(0), xOffsetText2, yOffsetText2);
        this.addInteractable(this.scene.add.zone(this.x + xOffsetText3, this.y + yOffsetText3, this.text3.displayWidth,this.text3.displayHeight).setName(`12/15/${CURRENT_YEAR}`).setOrigin(0, 0).setInteractive({useHandCursor: true}).setScrollFactor(0), xOffsetText3, yOffsetText3);
        this.addInteractable(this.scene.add.zone(this.x + xOffsetText4, this.y + yOffsetText4, this.text4.displayWidth,this.text4.displayHeight).setName(`12/20/${CURRENT_YEAR}`).setOrigin(0, 0).setInteractive({useHandCursor: true}).setScrollFactor(0), xOffsetText4, yOffsetText4);
        this.addInteractable(this.scene.add.zone(this.x + xOffsetText5, this.y + yOffsetText5, this.text5.displayWidth,this.text5.displayHeight).setName(`12/25/${CURRENT_YEAR}`).setOrigin(0, 0).setInteractive({useHandCursor: true}).setScrollFactor(0), xOffsetText5, yOffsetText5);
        

        return this;
    }

    click(date: string, fn: (affirmation: string) => void): void 
    {
        super.click(date, fn);
    }
}