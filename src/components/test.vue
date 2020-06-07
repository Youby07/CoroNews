<template>
    <v-content>
        <number
        ref="number1"
        :from="100"
        :to="10000"
        :format="theFormat"
        :duration="1"
        :delay="2"
        easing="Power100.easeOut"/>
    </v-content>
</template>

<script>
export default {
    // Sets the format of the number
    name: 'test',
    methods: {
        
    }
}
</script> 