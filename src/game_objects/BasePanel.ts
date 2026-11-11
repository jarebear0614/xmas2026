import { BaseScene } from "../scenes/BaseScene";

import { GameObjects } from 'phaser';
import { AFFIRMATIONS } from "../util/const";

export class PanelObject 
{
    transform: GameObjects.GameObject & GameObjects.Components.Transform;
    xOffset: number;
    yOffset: number;
}

export class BasePanel 
{
    protected scene: BaseScene;

    _x: number;

    _defaultBaseColor: string | CanvasGradient | CanvasPattern = '#AAAAAA';
    _defaultAvailableColor: string | CanvasGradient | CanvasPattern = '#FFFFFF';

    get x() 
    {
        return this._x;
    }
    set x(newX: number) {
        this.setPosition(newX, this._y);
    }

    _y: number;

    get y() 
    {
        return this._y;
    }
    set y(newY: number) {
        this.setPosition(this._x, newY);
    }

    protected objects: PanelObject[] = [];
    protected interactables: PanelObject[] = [];

    constructor(scene: BaseScene, x: number, y: number)
    {
        this.scene = scene;
        this.x = x;
        this.y = y;
    }

    create(currentDate: Date) : BasePanel
    {
        return this;
    }

    update(delta: number)
    {
        
    }

    protected addObject(o: GameObjects.GameObject & GameObjects.Components.Transform, xOffset: number, yOffset: number)
    {
        this.objects.push({transform: o, xOffset: xOffset, yOffset: yOffset});
    }

    protected addInteractable(o: GameObjects.GameObject & GameObjects.Components.Transform, xOffset: number, yOffset: number)
    {
        this.interactables.push({transform: o, xOffset: xOffset, yOffset: yOffset});
    }

    on() 
    {
        for(let i = 0; i < this.interactables.length; ++i)
        {
            this.interactables[i].transform.setInteractive({useHandCursor: true});
        }
    }

    off()
    {
        for(let i = 0; i < this.interactables.length; ++i)
        {
            this.interactables[i].transform.disableInteractive(true);
        }
    }

    over(date: string)
    {

    }

    out(date: string)
    {

    }

    click(date: string, fn: (affirmation: string) => void) : void
    {
        fn(AFFIRMATIONS[date]);
    }

    closeAffirmation(date: string) : void
    {
        
    }

    setDefaultAvailableColor(color: string | CanvasGradient | CanvasPattern)
    {
        this._defaultAvailableColor = color;
    }

    setDefaultBaseColor(color: string | CanvasGradient | CanvasPattern)
    {
        this._defaultBaseColor = color;
    }

    setPosition(x: number, y: number)
    {
        this._x = x;
        this._y = y;

        for(let i = 0; i < this.objects.length; ++i)
        {
            let obj = this.objects[i];
            obj.transform.setPosition(this._x + obj.xOffset, this._y + obj.yOffset);
        }

        for(let i = 0; i < this.interactables.length; ++i)
        {
            let obj = this.interactables[i];
            obj.transform.setPosition(this._x + obj.xOffset, this._y + obj.yOffset);
        }
    }

    protected createNumberedText(number: string, 
                                 currentDate: Date, 
                                 affirmationDate: Date, 
                                 baseColor: string | CanvasGradient | CanvasPattern = this._defaultBaseColor, 
                                 availableColor: string | CanvasGradient | CanvasPattern = this._defaultAvailableColor) 
    {
        return this.scene.add.text(0, 0, number, {fontFamily: 'Arial', fontSize: 64, color: '#FFFFFF'})
            .setStroke("#000000", 5)
            .setScrollFactor(0)
            .setVisible(true)
            .setOrigin(0, 0)
            .setFill(currentDate >= affirmationDate ? availableColor : baseColor);
    }
}