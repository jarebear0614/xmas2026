import { GameObjects } from "phaser";
import { BaseScene } from "../scenes/BaseScene";
import { BasePanel } from "./BasePanel";
import { CURRENT_YEAR } from "../util/const";


export class Shows extends BasePanel 
{
    text1: GameObjects.Text;
    text2: GameObjects.Text;
    text3: GameObjects.Text;
    text4: GameObjects.Text;
    text5: GameObjects.Text;

    background: GameObjects.Image;

    pirateBoatXOffset: number;
    pirateBoatYOffset: number;
    pirateBoat: GameObjects.Image;

    plumeSmoke: GameObjects.Sprite;

    constructor(scene: BaseScene, x: number, y: number)
    {
        super(scene, x, y);   
    }

    create(currentDate: Date) : BasePanel
    {
        super.create(currentDate);

        this.background = this.scene.add.image(this.x, this.y, 'ShowsBackground').setOrigin(0, 0);

        this.pirateBoatXOffset = this.scene.getGameWidth() * 0.22;
        this.pirateBoatYOffset = this.scene.getGameHeight() * 0.48;
        this.pirateBoat = this.scene.add.image(this.x + this.pirateBoatXOffset, this.y + this.pirateBoatYOffset, 'PirateBoat').setOrigin(0, 0).setScale(3.5, 3.5);

        let plumeX = this.scene.getGameWidth() * 0.41;
        let plumeY = this.scene.getGameHeight() * 0.19;
        this.plumeSmoke = this.scene.add.sprite(plumeX, plumeY, "PlumeSmoke", 0);

        this.scene.anims.create({
            key: 'PlumeSprite_Anim',
            frames: this.scene.anims.generateFrameNumbers('PlumeSmoke', {start: 0, end: 1}),
            frameRate: 3,
            repeat: -1
        });

        this.plumeSmoke.anims.play({key: 'PlumeSprite_Anim', }, false);

        this.addObject(this.background, 0, 0);
        this.addObject(this.pirateBoat, this.pirateBoatXOffset, this.pirateBoatYOffset);
        this.addObject(this.plumeSmoke, plumeX, plumeY);

        this.text1 = this.createNumberedText('2', currentDate, new Date(CURRENT_YEAR, 11, 2), '#AAAAAA', '#FFFFFF');
        this.text2 = this.createNumberedText('7', currentDate, new Date(CURRENT_YEAR, 11, 7), '#AAAAAA', '#FFFFFF');
        this.text3 = this.createNumberedText('12', currentDate, new Date(CURRENT_YEAR, 11, 12), '#AAAAAA', '#FFFFFF');
        this.text4 = this.createNumberedText('17', currentDate, new Date(CURRENT_YEAR, 11, 17), '#AAAAAA', '#FFFFFF');
        this.text5 = this.createNumberedText('22', currentDate, new Date(CURRENT_YEAR, 11, 22), '#AAAAAA', '#FFFFFF');

        let xOffsetText1 = (this.scene.getGameWidth() * 0.50) - (this.text1.displayWidth / 2);
        let yOffsetText1 = (this.scene.getGameHeight() * 0.10) - (this.text1.displayHeight / 2);

        this.text1.setPosition(this.x + xOffsetText1, this.y + yOffsetText1);
        this.addObject(this.text1, xOffsetText1, yOffsetText1);

        let xOffsetText2 = (this.scene.getGameWidth() * 0.85) - (this.text2.displayWidth / 2);
        let yOffsetText2 = (this.scene.getGameHeight() * 0.26) - (this.text2.displayHeight / 2);

        this.text2.setPosition(this.x + xOffsetText2, this.y + yOffsetText2);
        this.addObject(this.text2, xOffsetText2, yOffsetText2);

        let xOffsetText3 = (this.scene.getGameWidth() * 0.50) - (this.text3.displayWidth / 2);
        let yOffsetText3 = (this.scene.getGameHeight() * 0.48) - (this.text3.displayHeight / 2);

        this.text3.setPosition(this.x + xOffsetText3, this.y + yOffsetText3);
        this.addObject(this.text3, xOffsetText3, yOffsetText3);

        let xOffsetText4 = (this.scene.getGameWidth() * 0.68) - (this.text4.displayWidth / 2);
        let yOffsetText4 = (this.scene.getGameHeight() * 0.70) - (this.text4.displayHeight / 2);

        this.text4.setPosition(this.x + xOffsetText4, this.y + yOffsetText4);
        this.addObject(this.text4, xOffsetText4, yOffsetText4);

        let xOffsetText5 = (this.scene.getGameWidth() * 0.35) - (this.text5.displayWidth / 2);
        let yOffsetText5 = (this.scene.getGameHeight() * 0.92) - (this.text5.displayHeight / 2);

        this.text5.setPosition(this.x + xOffsetText5, this.y + yOffsetText5);
        this.addObject(this.text5, xOffsetText5, yOffsetText5);

        this.addInteractable(this.scene.add.zone(this.x + xOffsetText1, this.y + yOffsetText1, this.text1.displayWidth,this.text1.displayHeight).setName(`12/2/${CURRENT_YEAR}`).setOrigin(0, 0).setInteractive({useHandCursor: true}).setScrollFactor(0), xOffsetText1, yOffsetText1);
        this.addInteractable(this.scene.add.zone(this.x + xOffsetText2, this.y + yOffsetText2, this.text2.displayWidth,this.text2.displayHeight).setName(`12/7/${CURRENT_YEAR}`).setOrigin(0, 0).setInteractive({useHandCursor: true}).setScrollFactor(0), xOffsetText2, yOffsetText2);
        this.addInteractable(this.scene.add.zone(this.x + xOffsetText3, this.y + yOffsetText3, this.text3.displayWidth,this.text3.displayHeight).setName(`12/12/${CURRENT_YEAR}`).setOrigin(0, 0).setInteractive({useHandCursor: true}).setScrollFactor(0), xOffsetText3, yOffsetText3);
        this.addInteractable(this.scene.add.zone(this.x + xOffsetText4, this.y + yOffsetText4, this.text4.displayWidth,this.text4.displayHeight).setName(`12/17/${CURRENT_YEAR}`).setOrigin(0, 0).setInteractive({useHandCursor: true}).setScrollFactor(0), xOffsetText4, yOffsetText4);
        this.addInteractable(this.scene.add.zone(this.x + xOffsetText5, this.y + yOffsetText5, this.text5.displayWidth,this.text5.displayHeight).setName(`12/22/${CURRENT_YEAR}`).setOrigin(0, 0).setInteractive({useHandCursor: true}).setScrollFactor(0), xOffsetText5, yOffsetText5);

        return this;
    }

    click(date: string, fn: (affirmation: string) => void): void 
    {
        if(date == `12/12/${CURRENT_YEAR}`)
        {
            let xTween = this.scene.add.tween({
                targets: this.pirateBoat,
                x: this.scene.getGameWidth() * 0.66,
                ease: 'Linear',
                duration: 1200,
                repeat: 0,
                yoyo: false
            });

            xTween.onCompleteHandler = () => {
                this.scene.tweens.killTweensOf(this.pirateBoat);
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
        if(date == `12/12/${CURRENT_YEAR}`)
        {
            this.pirateBoat.setPosition(this.x + this.pirateBoatXOffset, this.y + this.pirateBoatYOffset);
        }
    }
}