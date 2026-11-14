import { GameObjects } from "phaser";
import { BaseScene } from "../scenes/BaseScene";
import { BasePanel } from "./BasePanel";
import { CURRENT_YEAR } from "../util/const";

export class Cheesecake extends BasePanel 
{
    text1: GameObjects.Text;
    text2: GameObjects.Text;
    text3: GameObjects.Text;
    text4: GameObjects.Text;
    text5: GameObjects.Text;

    background: GameObjects.Image;

    us: GameObjects.Image;
    usXOffset: number;
    usYOffset: number;

    constructor(scene: BaseScene, x: number, y: number)
    {
        super(scene, x, y);   
    }

    create(currentDate: Date) : BasePanel
    {
        super.create(currentDate);

        this.background = this.scene.add.image(this.x, this.y, 'CheesecakeBackground').setOrigin(0, 0);

        this.usXOffset = this.scene.getGameWidth() * 0.03;
        this.usYOffset = this.scene.getGameHeight() * 0.22;
        this.us = this.scene.add.image(this.x + this.usXOffset, this.y + this.usYOffset, 'CheesecakeUs').setOrigin(0, 0);

        this.addObject(this.background, 0, 0);
        this.addObject(this.us, this.usXOffset, this.usYOffset);

        this.text1 = this.createNumberedText('1', currentDate, new Date(CURRENT_YEAR, 11, 1), '#AAAAAA', '#FFFFFF');
        this.text2 = this.createNumberedText('6', currentDate, new Date(CURRENT_YEAR, 11, 6), '#AAAAAA', '#FFFFFF');
        this.text3 = this.createNumberedText('11', currentDate, new Date(CURRENT_YEAR, 11, 11), '#AAAAAA', '#FFFFFF');
        this.text4 = this.createNumberedText('16', currentDate, new Date(CURRENT_YEAR, 11, 16), '#AAAAAA', '#FFFFFF');
        this.text5 = this.createNumberedText('21', currentDate, new Date(CURRENT_YEAR, 11, 21), '#AAAAAA', '#FFFFFF');

        let xOffsetText1 = (this.scene.getGameWidth() * 0.20) - (this.text1.displayWidth / 2);
        let yOffsetText1 = (this.scene.getGameHeight() * 0.10) - (this.text1.displayHeight / 2);

        this.text1.setPosition(this.x + xOffsetText1, this.y + yOffsetText1);
        this.addObject(this.text1, xOffsetText1, yOffsetText1);

        let xOffsetText2 = (this.scene.getGameWidth() * 0.85) - (this.text2.displayWidth / 2);
        let yOffsetText2 = (this.scene.getGameHeight() * 0.26) - (this.text2.displayHeight / 2);

        this.text2.setPosition(this.x + xOffsetText2, this.y + yOffsetText2);
        this.addObject(this.text2, xOffsetText2, yOffsetText2);

        let xOffsetText3 = (this.scene.getGameWidth() * 0.25) - (this.text3.displayWidth / 2);
        let yOffsetText3 = (this.scene.getGameHeight() * 0.65) - (this.text3.displayHeight / 2);

        this.text3.setPosition(this.x + xOffsetText3, this.y + yOffsetText3);
        this.addObject(this.text3, xOffsetText3, yOffsetText3);

        let xOffsetText4 = (this.scene.getGameWidth() * 0.78) - (this.text4.displayWidth / 2);
        let yOffsetText4 = (this.scene.getGameHeight() * 0.65) - (this.text4.displayHeight / 2);

        this.text4.setPosition(this.x + xOffsetText4, this.y + yOffsetText4);
        this.addObject(this.text4, xOffsetText4, yOffsetText4);

        let xOffsetText5 = (this.scene.getGameWidth() * 0.50) - (this.text5.displayWidth / 2);
        let yOffsetText5 = (this.scene.getGameHeight() * 0.55) - (this.text5.displayHeight / 2);

        this.text5.setPosition(this.x + xOffsetText5, this.y + yOffsetText5);
        this.addObject(this.text5, xOffsetText5, yOffsetText5);

        this.addInteractable(this.scene.add.zone(this.x + xOffsetText1, this.y + yOffsetText1, this.text1.displayWidth,this.text1.displayHeight).setName(`12/1/${CURRENT_YEAR}`).setOrigin(0, 0).setInteractive({useHandCursor: true}).setScrollFactor(0), xOffsetText1, yOffsetText1);
        this.addInteractable(this.scene.add.zone(this.x + xOffsetText2, this.y + yOffsetText2, this.text2.displayWidth,this.text2.displayHeight).setName(`12/6/${CURRENT_YEAR}`).setOrigin(0, 0).setInteractive({useHandCursor: true}).setScrollFactor(0), xOffsetText2, yOffsetText2);
        this.addInteractable(this.scene.add.zone(this.x + xOffsetText3, this.y + yOffsetText3, this.text3.displayWidth,this.text3.displayHeight).setName(`12/11/${CURRENT_YEAR}`).setOrigin(0, 0).setInteractive({useHandCursor: true}).setScrollFactor(0), xOffsetText3, yOffsetText3);
        this.addInteractable(this.scene.add.zone(this.x + xOffsetText4, this.y + yOffsetText4, this.text4.displayWidth,this.text4.displayHeight).setName(`12/16/${CURRENT_YEAR}`).setOrigin(0, 0).setInteractive({useHandCursor: true}).setScrollFactor(0), xOffsetText4, yOffsetText4);
        this.addInteractable(this.scene.add.zone(this.x + xOffsetText5, this.y + yOffsetText5, this.text5.displayWidth,this.text5.displayHeight).setName(`12/21/${CURRENT_YEAR}`).setOrigin(0, 0).setInteractive({useHandCursor: true}).setScrollFactor(0), xOffsetText5, yOffsetText5);

        return this;
    }

    over(date: string): void 
    {
        super.over(date);
    }

    out(date: string): void {
        super.out(date);
    }

    click(date: string, fn: (affirmation: string) => void): void 
    {
        if(date == `12/1/${CURRENT_YEAR}`)
        {
            let xTween = this.scene.add.tween({
                targets: this.us,
                x: this.scene.getGameWidth() * 0.24,
                ease: 'Linear',
                duration: 1200,
                repeat: 0,
                yoyo: false
            });

            this.scene.add.tween({
                targets: this.us,
                y: this.scene.getGameWidth() * 0.145,
                ease: 'Linear',
                duration: 1200,
                repeat: 0,
                yoyo: false
            });

            xTween.onCompleteHandler = () => {
                this.scene.tweens.killTweensOf(this.us);
                super.click(date, fn);
            }
        }
        else
        {
            super.click(date, fn);
        }        
    }

    closeAffirmation(date: string): void 
    {
        if(date == `12/1/${CURRENT_YEAR}`)
        {
            this.us.setPosition(this.x + this.usXOffset, this.y + this.usYOffset);
        }
    }
}
