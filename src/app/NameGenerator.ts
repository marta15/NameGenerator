import { adjectives, animals, names, places, people, towns, titles, weird } from '../dictionaries'

export enum NameType {
    username = 'username',
    geo = 'geo',
    town = 'town',
    character = 'character',
    pet = 'pet'
}

export abstract class NameGenerator {
    static generate(type: string, num: number) {
        let results = new Array();
        if (type === NameType.geo) {
            for (let i = 0; i < num; i++) {
                results.push(this.titleCase(adjectives.concat(animals)[Math.floor(Math.random() * (adjectives.length + animals.length))]) +
                    ' ' + this.titleCase(places[Math.floor(Math.random() * places.length)]))
            }
        }
        else if (type === NameType.username) {
            for (let i = 0; i < num; i++) {
                if (i % 2 === 0)
                    results.push(this.titleCase(adjectives[Math.floor(Math.random() * adjectives.length)]) +
                        this.titleCase(animals[Math.floor(Math.random() * animals.length)]))
                else
                    results.push(this.titleCase(animals[Math.floor(Math.random() * animals.length)]) +
                        this.titleCase(people[Math.floor(Math.random() * people.length)]))
            }
        }
        else if (type === NameType.character) {
            for (let i = 0; i < num; i++) {
                results.push(this.titleCase(names[Math.floor(Math.random() * names.length)]) +
                    ' ' + this.titleCase(animals.concat(adjectives)[Math.floor(Math.random() * (animals.length + adjectives.length))]))
            }
        }
        else if (type === NameType.town) {
            for (let i = 0; i < num; i++) {
                results.push(this.titleCase(animals.concat(adjectives)[Math.floor(Math.random() * (animals.length + adjectives.length))]) +
                    towns[Math.floor(Math.random() * towns.length)])
            }
        }
        else if (type === NameType.pet) {
            for (let i = 0; i < num; i++) {
                results.push(this.titleCase(titles[Math.floor(Math.random() * (titles.length))]) +
                    ' ' + this.titleCase(weird[Math.floor(Math.random() * weird.length)]))
            }
        }
        else results.push("Something went wrong");

        return results;
    }

    private static titleCase(str: string) {
        return str.charAt(0).toUpperCase() + str.substring(1);
    }
}